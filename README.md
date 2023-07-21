[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE.md)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website.svg)

## Video Demo of NeuroDetect
https://youtu.be/760QNJhCh3k

## Background

As a patient develops cancer, their gene expression pattern changes in a characteristic way that can be quantified by sequencing their RNA, yielding a numerical expression value for every gene. Thus, we developed a convolutional neural network able to predict whether a patient’s RNA-seq data is likely to be representative of cancer tissue. This cost-effective, non-invasive diagnosis method aims to increase the success rate of early cancer detection.

## About

The CNN was trained with Tensorflow based on patient RNA-seq data transformed into 2D images suitable for the CNN’s convolutional layer. It contains 2.4M parameters, achieves a 98.7% prediction accuracy, and is able to classify 4 types of cancer: breast, lung, kidney, and uterine cancer. 


## How to use it 

NeuroDetect takes a 2D image transformed from RNA-seq data as the input. Under ```c_images``` the test and train data can be found. Under each category, there are 8 classes of tissue: 

- Breast Normal Tissue (BRCA.N)
- Breast Invasive Carcinoma (BRCA.T)
- Kidney Renal Normal Tissue (KIRC.N)
- Kidney Renal Clear Cell Carcinoma (KIRC.T)
- Lung Normal Tissue (LUAD.N)
- Lung Adenocarcinoma (LUAD.T)
- Uterine Corpus Endometrial Normal Tissue (UCEC.N)
- Uterine Corpus Endometrial Carcinoma (UCEC.T)

To test out NeuroDetect, input a file from any of the 8 categories under test data, which the CNN has never seen before. 



## Installation

Requirements: 
* System: Python (3.11.4), Anaconda (23.3.1)
* CNN: Tensorflow (2.11)
* Misc: Flask (2.3.2), React (18.2.0)

Instructions:
1. Clone the repository
```
$ git clone https://github.com/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website
```
2. Install required dependencies
3. Run frontend
```
$ cd client
$ npm start
```
3. Activate tensorflow via anaconda and set up environment
```
$ conda activate tensorflow
$ cd flask-server
$ export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python (on mac)
```
4. Run ```server.py``` backend
```
$ python server.py
```
