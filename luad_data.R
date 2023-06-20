library(TCGAbiolinks)
library(SummarizedExperiment)
library(dplyr)
library(DT)
library("DESeq2")
library("pheatmap")
library("pracma")
library("graphics")
library("caTools")

#RNA-seq data from The Cancer Genome Atlas Program (TCGA). LUAD - Lung Adenocarcinoma
query <- GDCquery(
  project = "TCGA-LUAD",data.category = "Gene expression",data.type = "Gene expression quantification",
  platform = "Illumina HiSeq", file.type  = "results",experimental.strategy = "RNA-Seq",
  sample.type = c("Primary Tumor","Solid Tissue Normal"), legacy = TRUE)
GDCdownload(query = query, method = "api", files.per.chunk = 10)
#"01"="Primary Tumor" || "11"="Solid Tissue Normal"
# or in dds
#"1"="Primary Tumor" || "2"="Solid Tissue Normal"
luad_raw_data <- GDCprepare(query = query)
luad_raw_data@assays@data@listData[["raw_count"]] <- round(luad_raw_data@assays@data@listData[["raw_count"]])
dds <- DESeqDataSet(luad_raw_data, design = ~ sample_type_id)

#plot PCA, differential gene expression plots
vsd <- vst(dds, blind=FALSE)
deg <- DESeq(dds, fitType="glmGamPoi", test = 'LRT', reduced = ~ 1)
res <- results(deg)
resultsNames(deg)
resOrdered <- res[order(res$pvalue),]
summary(res)
sum(res$padj < 0.05, na.rm=TRUE)
plotMA(res, ylim=c(-2,2))
plotPCA(vsd, intgroup="sample_type_id")
sampleDists <- dist(t(assay(vsd)))
sampleDistMatrix <- as.matrix(sampleDists)
rownames(sampleDistMatrix) <- paste(vsd$condition, vsd$type, sep="-")
colnames(sampleDistMatrix) <- NULL
pheatmap(sampleDistMatrix,clustering_distance_rows=sampleDists,clustering_distance_cols=sampleDists)

#optional analysis code to run 
# resLFC <- lfcShrink(deg, coef="sample_type_id11", type="apeglm")
# plotMA(resLFC, ylim=c(-2,2))
# idx <- identify(res$baseMean, res$log2FoldChange)
# rownames(res)[idx]
# rld <- rlog(deg, blind=FALSE)

#prepare environment variables 
structured_data <- t(rbind(dds@colData@listData[["sample_type_id"]],vsd@assays@data@listData[[1]]))
zeros_array <- matrix(0,length(dds@colData@listData[["sample_type_id"]]),3)
mat <- cbind(structured_data,zeros_array)

#use 80% of dataset as training set and 20% as test set 
number_of_samples <- length(dds@colData@listData[["sample_type_id"]])
set.seed(1)
df = as.data.frame(mat)
train <- df %>% dplyr::sample_frac(0.80)
train_2 <- train[,-1]
train_2 <- apply(as.matrix(train_2), 2, as.numeric)
test  <- dplyr::anti_join(df, train)
test_2 <- test[,-1]
test_2 <- apply(as.matrix(test_2), 2, as.numeric)

#generate train data images (80%)
for (i in 1:nrow(train)){
  temp_mat <- Reshape(train_2[i,],150,133)
  mode(temp_mat) = "numeric"
  if(train[i,"V1"]=='1'){
    temp_string <- paste(c("t",i,".png"), collapse = "")
  } else if(train[i,"V1"]=='2'){
    temp_string <- paste(c("n",i,".png"), collapse = "")
  }
  png(filename = temp_string, width = 1380, height = 834)
  img <- image(temp_mat)
  dev.off()
}

#generate test data images (20%) 
for (i in 1:nrow(test)){
  temp_mat <- Reshape(test_2[i,],150,133)
  mode(temp_mat) = "numeric"
  if(test[i,"V1"]=='1'){
    temp_string <- paste(c("t",i,".png"), collapse = "")
  } else if(test[i,"V1"]=='2'){
    temp_string <- paste(c("n",i,".png"), collapse = "")
  }
  png(filename = temp_string, width = 1380, height = 834)
  img <- image(temp_mat)
  dev.off()
}

#optional code to run 

#raw-data based CNN classification structured data
gene_names <- append(vsd@rowRanges@ranges@NAMES,'ID',after=0)
structured_luad <- t(rbind(vsd@colData@listData[["sample_type_id"]],vsd@assays@data@listData[["raw_count"]]))
write.csv(structured_luad,"vsd_structured_data.csv")

#create single-case model testing csv files
#Sample 
sample_10 <- t(structured_luad[1,])
write.csv(sample_1,"sample_1_t.csv")

#create image-based CNN training labels
image_names <- vector("character",0)
for (i in 1:1208){
  if(sample_type_id[i]=='01'){
    k <- paste(c("t",i,".png"), collapse = "")
  } else if(sample_type_id[i]=='11'){
    k <- paste(c("n",i,".png"), collapse = "")
  }
  image_names <<- c(image_names,k)
}
luad_train_labels <- cbind(image_names,sample_type_id)
write.csv(luad_train_labels,"luad_train_labels.csv")