import React, {Component} from 'react';
import '../App.css';
import {Box} from '@mui/material'

import brca_pca from '../plots/brca_pca_img.png';
import ucec_pca from '../plots/ucec_pca.png';
import brca_heatmap from '../plots/brca_heatmap_img.png';
import ucec_heatmap from '../plots/ucec_heatmap.png';
import sample_brca_n from '../sample_images/brca_n.png';
import sample_brca_t from '../sample_images/brca_t.png';
import sample_kirc_n from '../sample_images/kirc_n.png';
import sample_kirc_t from '../sample_images/kirc_t.png';
import sample_luad_n from '../sample_images/luad_n.png';
import sample_luad_t from '../sample_images/luad_t.png';
import sample_ucec_n from '../sample_images/ucec_n.png';
import sample_ucec_t from '../sample_images/ucec_t.png';

class HowItWorks extends Component{
    render(){
        return(
          <Box sx={{paddingTop:'80px', paddingLeft: '30px'}}>
            <div className="how_it_works">
              <p className="textbox" data-element="textbox">NeuroDetect uses a convolutional neural network (CNN) to classify RNA-seq data. Raw numerical data is 
              first preprocessed through a dimensionality reduction of the data. It is transformed into a 2D heatmap, which the CNN is able to identify and 
              categorize into 8 different classes:</p>
              <p className="textbox" data-element="textbox">Breast Normal Tissue (BRCA.N), Breast Invasive Carcinoma (BRCA.T), Kidney Renal Normal Tissue (KIRC.N), 
              Kidney Renal Clear Cell Carcinoma (KIRC.T) Lung Normal Tissue (LUAD.N), Lung Adenocarcinoma (LUAD.T), Uterine Corpus Endometrial Normal Tissue (UCEC.N), 
              Uterine Corpus Endometrial Carcinoma (UCEC.T)</p>
              <p className="textbox" data-element="textbox">Using the training data, we visualized the raw RNA-seq data by projecting it in a low dimensional space 
              using Principal Component Analysis (PCA), which is a linear projection. From the figures below for BRCA(left) and UCEC(right), it is clear that the RNA-seq 
              data forms two clusters according to the classes 01 (Tumor) and 11 (Normal). Thus we establish that there is, indeed, a statistically significant difference 
              between the RNA-seq of Tumor and Normal tissue. The NeuroDetect CNN identifies and differentiates classes based on this difference.</p>
              <br/>
              <br/>
              <div className="pca">
                <img src={brca_pca} alt="brca_pca" />
                <img src={ucec_pca} alt="ucec_pca" />
              </div>
              <br/>            
              <p className="textbox" data-element="textbox">To further confirm the class difference between Normal and Tumor tissue, we generated Spearman Correlation 
              matrix heatmaps of the RNA-seq data below (BRCA,left. UCEC,right)</p>
              <br/>
              <br/>
              <div className="pca">
                <img src={brca_heatmap} alt="brca_heatmap" />
                <img src={ucec_heatmap} alt="ucec_heatmap" />
              </div>
              <p className="textbox" data-element="textbox">Below is a sample of the 2D-images that are obtained from the raw dataset by transforming each row into a matrix of size 
              (150x133) to be suitable for the use of the convolutional layer of the CNN. (Top, left to right): BRCA.N, BRCA.T, KIRC.N, KIRC.T (Bottom, left to right): 
              LUAD.N, LUAD.T, UCEC.N, UCEC.T</p>
              <br/>
              <br/>
              <div className="pca2">
                <img src={sample_brca_n} alt="sample_2D_images" className="image2"/>
                <img src={sample_brca_t} alt="sample_2D_images" className="image2"/>
                <img src={sample_kirc_n} alt="sample_2D_images" className="image2"/>
                <img src={sample_kirc_t} alt="sample_2D_images" className="image2"/>
              </div>
              <div className="pca2">
                <img src={sample_luad_n} alt="sample_2D_images" className="image2"/>
                <img src={sample_luad_t} alt="sample_2D_images" className="image2"/>
                <img src={sample_ucec_n} alt="sample_2D_images" className="image2"/>
                <img src={sample_ucec_t} alt="sample_2D_images" className="image2"/>
              </div>
              <br/>
            </div>
          </Box>
        )
    }
}

export default HowItWorks