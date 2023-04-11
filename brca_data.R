library(TCGAbiolinks)
library(SummarizedExperiment)
library(dplyr)
library(DT)
library("DESeq2")
library("pheatmap")

query <- GDCquery(
  project = "TCGA-BRCA",
  data.category = "Gene expression",
  data.type = "Gene expression quantification",
  platform = "Illumina HiSeq", 
  file.type  = "results",
  experimental.strategy = "RNA-Seq",
  sample.type = c("Primary Tumor","Solid Tissue Normal"),
  legacy = TRUE
)
GDCdownload(
  query = query, 
  method = "api", 
  files.per.chunk = 10
)
#"01"="Primary Tumor" || "11"="Solid Tissue Normal"
brca_raw_data <- GDCprepare(query = query)
dds <- DESeqDataSet(brca_raw_data, design = ~ sample_type_id)

vsd <- vst(dds, blind=FALSE)

deg <- DESeq(dds, fitType="glmGamPoi", test = 'LRT', reduced = ~ 1)
res <- results(deg)

resultsNames(deg)
resLFC <- lfcShrink(deg, coef="sample_type_id11", type="apeglm")

resOrdered <- res[order(res$pvalue),]
summary(res)
sum(res$padj < 0.05, na.rm=TRUE)

plotMA(res, ylim=c(-2,2))
plotMA(resLFC, ylim=c(-2,2))

idx <- identify(res$baseMean, res$log2FoldChange)
rownames(res)[idx]

vsd <- vst(deg, blind=FALSE)
plotPCA(vsd, intgroup="sample_type_id")
#rld <- rlog(deg, blind=FALSE)

sampleDists <- dist(t(assay(vsd)))
sampleDistMatrix <- as.matrix(sampleDists)
rownames(sampleDistMatrix) <- paste(vsd$condition, vsd$type, sep="-")
colnames(sampleDistMatrix) <- NULL
pheatmap(sampleDistMatrix,
         clustering_distance_rows=sampleDists,
         clustering_distance_cols=sampleDists)

gene_names <- brca_raw_data@rowRanges@ranges@NAMES
gene_names <- append(brca_raw_data@rowRanges@ranges@NAMES,'ID',after=0)
structured_brca <- t(rbind(brca_raw_data@colData@listData[["sample_type_id"]]
                         ,brca_raw_data@assays@data@listData[["raw_count"]]))
n_sbrca <- t(rbind(brca_raw_data@colData@listData[["sample_type_id"]]
                           ,vsd@assays@data@listData[[1]]))

write.csv(structured_brca,"brca_structured_data.csv")
sample_1 <- t(structured_brca[1,])
write.csv(sample_1,"sample_1_t.csv")
sample_29 <- t(structured_brca[29,])
write.csv(sample_29,"sample_29_n.csv")
sample_42 <- t(structured_brca[42,])
write.csv(sample_42,"sample_42_n.csv")
sample_43 <- t(structured_brca[43,])
write.csv(sample_43,"sample_43_t.csv")
