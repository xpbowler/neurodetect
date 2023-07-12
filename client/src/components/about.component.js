import React, {Component} from 'react';
import '../App.css';

export default class About extends Component{
    render(){
        return(
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
        )
    }
}
