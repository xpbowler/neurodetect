import React, {Component} from 'react';
import axios from 'axios';
import {Box} from '@mui/material'

export default class HomePage extends Component{

    constructor(props){
        super(props)

        this.onChangeImage = this.onChangeImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            image: null,
            prediction: '',
            prediction2: '',
            prediction3: ''
        }
    }

    onChangeImage(e){
        this.setState({image: e.target.files[0]})
    }

    onSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", this.state.image);
        axios.post("http://localhost:5001/",formData).then(res => {
            this.setState({
                prediction: res.data.result,
                prediction2: res.data.result2,
                prediction3: res.data.result3
            })
        }); 
    }
    
    render(){
        return(
            <Box sx={{paddingTop:'100px', paddingLeft: '50px'}}>
                <h3>Welcome Guest</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Input the RNA-seq data sample*</label>
                        <input type="file" accept="image/*" required onChange={this.onChangeImage}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Predict" className="btn btn-primary" />
                    </div> 
                </form>
                <form>
                </form>
                <div>
                    <p>{this.state.prediction}</p>
                    <p>{this.state.prediction2}</p>
                    <p>{this.state.prediction3}</p>
                </div>
                <br/>
                <br/>
                <br/>
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
                <p className="textbox" data-element="textbox"><a href="https://github.com/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website" className="textbox" data-element="textbox">Project github</a></p>
                <br/>
                <p className="textbox" data-element="textbox"><a href="https://portal.gdc.cancer.gov/repository">Training data</a>: From the Cancer
                Genome Atlas Program</p>
                <p id="developer_title" data-element="textbox">The developers</p>
                <br/>
                <br/>
                <p className="textbox" data-element="textbox">Ryan Nguyen: Incoming Software Engineering Student at the University of Waterloo; Research intern in the Crawley 
                Lab, Ottawa Hospital Research Institute.</p>
                <p className="textbox" data-element="textbox">Harvey Cai: Grade 12 student at Earl of March Secondary School, Ottawa, Canada.</p>
                <br/>
                <br/>
                <br/>
            </Box>
        )
    }
}

