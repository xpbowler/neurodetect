import React, {useState} from 'react'
import axios from "axios";

import './App.css';

import brca_pca from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/plots/brca_pca_img.png';
import ucec_pca from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/plots/ucec_pca.png';
import brca_heatmap from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/plots/brca_heatmap_img.png';
import ucec_heatmap from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/plots/ucec_heatmap.png';
import sample_brca_n from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/brca_n.png';
import sample_brca_t from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/brca_t.png';
import sample_kirc_n from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/kirc_n.png';
import sample_kirc_t from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/kirc_t.png';
import sample_luad_n from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/luad_n.png';
import sample_luad_t from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/luad_t.png';
import sample_ucec_n from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/ucec_n.png';
import sample_ucec_t from '/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/client/src/sample_images/ucec_t.png';


function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [prediction2, setPrediction2] = useState("");
  const [prediction3, setPrediction3] = useState("");
  const [prediction4, setPrediction4] = useState("");
  const [aboutdisplay, setaboutdisplay] = useState(0);
  const [how_it_works_display, sethow_it_works_display] = useState(0);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    axios.post("http://localhost:5001/",formData).then((response) => {
      setPrediction(response.data.result)
      setPrediction2(response.data.result2)
      setPrediction3(response.data.result3)
      setPrediction4(response.data.result4)
    }); 
  };

  return (
    <div>
      <header>
        <button className="headerbutton" onClick={() => {sethow_it_works_display(0);setaboutdisplay(0)}}>NeuroDetect</button>
        <button className="headerbutton" onClick={() => {setaboutdisplay(1);sethow_it_works_display(0)}}>About</button>
        <button className="headerbutton" onClick={() => {setaboutdisplay(0);sethow_it_works_display(1)}}>How it Works</button>
      </header>
      <div>
        {aboutdisplay ? (
          <>
            <div className="about">
              <p className="textbox" data-element="textbox">Artificial intelligence (AI) is becoming an increasingly central part of 
              healthcare and life science research, especially as the field of medicine transitions to a more personalized approach so-called precision medicine. 
              This is where treatments are tailored to each patient's specific lifestyle, environment, and genes. The overarching goal of precision medicine is to 
              target the optimal treatments to the right patients at the right time. For a complex and highly dangerous disease like cancer, early detection and 
              diagnosis is paramount. An ounce of prevention is worth a pound of cure. </p>
              <p className="textbox" data-element="textbox">One hallmark of cancer is the overexpression and underexpression of certain genes (oncogenes and tumor 
              supressor genes, respectively). A way to measure the expression values of these genes is through RNA; and if all the genes are sequenced, this is 
              called an RNA-seq profile. Thus, analyzing a patient's RNA-seq profile would be a highly accurate way of identifying cancer and would provide a 
              noninvasive, reliable method of diagnosing cancer.</p>
              <p className="textbox" data-element="textbox">The aim of NeuroDetect is to use a lightweight convolutional neural network (CNN) to analyze a 
              patient's RNA-seq profile and predict whether they have breast cancer or not, as well as the stage progression if present. The prediction would be 
              further corroborated with a more definitive diagnosis, such as an X-ray or PET-scan. NeuroDetect was initiated as part of a Grade 12 computer science 
              course (ICS4U) in Spring 2023. </p>
              <p id="developer_title" data-element="textbox">Acknowledgements</p>
              <br/>
              <br/>
              <p className="textbox" data-element="textbox">I would like to thank Dr. Angela Crawley and Jeff Li from the Crawley Lab (OHRI) for providing feedback on the 
              project and advice on the RNA-seq data preprocessing.</p>
              <a href="https://github.com/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website" className="textbox" data-element="textbox">Project github</a>
              <p className="textbox" data-element="textbox"><a href="https://portal.gdc.cancer.gov/repository">Training data</a>: From the Cancer
              Genome Atlas Program</p>
              <p id="developer_title" data-element="textbox">The developers</p>
              <br/>
              <br/>
              <p className="textbox" data-element="textbox">Ryan Nguyen: Incoming Software Engineering Student at the University of Waterloo; Research intern in the Crawley 
              Lab, Ottawa Hospital Research Institute. Principal Investigator: Dr. Angela Crawley, PhD. (<a href="https://www.linkedin.com/in/ryan-nguyen-0aa676218/">LinkedIn</a>)</p>
              <p className="textbox" data-element="textbox">Harvey Cai: Grade 12 student at Earl of March Secondary School, Ottawa, Canada.</p>
              <br/>
              <br/>
              <br/>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        {how_it_works_display ? (
          <>
            <div className="how_it_works">
              <p className="textbox" data-element="textbox">NeuroDetect uses a convolutional neural network (CNN) to classify RNA-seq data. Raw numerical data is 
              first preprocessed through a dimensionality reduction of the data. It is transformed into a 2D heatmap, which the CNN is able to identify and 
              categorize into 8 different classes:</p>
              <p className="textbox" data-element="textbox">Breast Normal Tissue (BRCA.N), Breast Invasive Carcinoma (BRCA.T), Kidney Renal Normal Tissue (KIRC.N), 
              Kidney Renal Clear Cell Carcinoma (KIRC.T) Lung Normal Tissue (LUAD.N), Lung Adenocarcinoma (LUAD.T), Uterine Corpus Endometrial Normal Tissue (UCEC.N), 
              Uterine Corpus Endometrial Carcinoma (UCEC.T)</p>
              <p className="textbox" data-element="textbox">Using the training data, we visualized the raw RNA-seq data by projecting it in a low dimensional space 
              using Principal Component Analysis (PCA), which is a linear projection. From the figures below for BRCA(left) and UCEC(right), it is clear that the RNA-seq 
              data forms two clusters according to the classes 11 (Tumor) and 01 (Normal). Thus we establish that there is, indeed, a statistically significant difference 
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
            </div>
            <br/>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <p id="input_prompt">Input the processed RNA-seq data:</p>  
        <input type="file" onChange={handleImageChange} accept="image/*"  />
        <button id="predict_btn" onClick={handleImageSubmit}>Predict</button>
        <p id="result">{prediction}</p>
        <p id ="result">{prediction2}</p>
        <p id ="result">{prediction3}</p>
        <p id ="result">{prediction4}</p>
        <p id="date">Last updated: June 9, 2023</p>
        <br/>
      </div>
    </div>
  )
}

export default App
