# NeuroDetect

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE.md)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website.svg)

## Background

As a patient develops cancer, their gene expression pattern changes in a characteristic way that can be quantified by sequencing their RNA, yielding a numerical expression value for every gene. NeuroDetect is a convolutional neural network able to predict whether a patient’s RNA-seq data is likely to be representative of cancer tissue. This cost-effective, non-invasive diagnosis method aims to increase the success rate of early cancer detection.

## 🌿 About

The CNN was trained in Tensorflow using patient RNA-seq data transformed into 2D images suitable for the CNN’s convolutional layer. Architecture: 2.4M parameters, 98.7% accuracy, 2 convolution+MaxPooling layers followed by 2 dense fully-connected layers. The CNN is able to classify 4 types of cancer: breast, lung, kidney, and uterine cancer. 


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


## Video Demo of NeuroDetect
[https://youtu.be/H1u89yBNDfk](https://youtu.be/H1u89yBNDfk)


## 🔨 Installation

Requirements: 
* System: Python (3.11.4), Anaconda (23.3.1)
* CNN: Tensorflow (2.11)
* Misc: Flask (2.3.2), React (18.2.0)

Environment variables are :

|        Name         |               Description               | Required | Default value |                   Limitations                    |
|:-------------------:|:---------------------------------------:|:--------:|:-------------:|:------------------------------------------------:|
|       `HOST`        | Host on which the React frontend will be available |    ❌     |  `3001`  |          If set, can't be empty string           |
|       `PORT`        | Port on which the Flask backend will be available |    ❌     |    `5001`     | If set, must be a number between `0` and `65535` |
|`PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION`   |  Tensorflow environment variable for Mac |    ✅     |       ❌       |  Set to `python`  |
|   `DATABASE_HOST`   |        MongoDB database host URL        |    ✅     |       ❌       |              Can't be empty string               |

File structure:

```bash
.
├── R # R scripts used to pre-process raw RNA-seq data
├── c_images # processed RNA-seq dataset (2D-transformed)
├── client # React frontend directory
│   ├── database # express server connecting to MongoDB database
│   ├── public # React HTML renderer
│   ├── src # javascript files to run website
│   │  ├── components # various react pages for website
│   │  ├── sample_images # sample 2D-image inputs for CNN for testing purposes
├── ics4u_cnn2 # Weights for CNN
├── flask-server # Python Flask backend for handling predictions
├── package.json # project metadata
├── package-lock.json # project dependencies
└── README.md 

```

Instructions:
1. Clone the repository
```
$ git clone [https://github.com/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website](https://github.com/xpbowler/neurodetect)
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
