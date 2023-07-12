#run: conda activate tensorflow 
#run: export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model
import autokeras as ak
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/",methods=["POST","GET"])
def predict():
    request.files["image"].save("frontend2.png")

    model = load_model("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/ics4u_cnn2",custom_objects=ak.CUSTOM_OBJECTS)

    img = tf.keras.utils.load_img("frontend2.png", target_size=(133,150))
    img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
    prediction = model.predict(img_array)
    score = tf.nn.softmax(prediction[0])
    if(np.array(score).argmax() == 0):
        result = f'The RNA-seq data most likely belongs to class: Breast Normal Tissue.'
        result4 = 'Breast Normal Tissue'
    elif(np.array(score).argmax() == 1):
        result = f'The RNA-seq data most likely belongs to class: Breast Invasive Carcinoma.'
        result4 = 'Breast Invasive Carcinoma'
    elif(np.array(score).argmax() == 2):
        result = f'The RNA-seq data most likely belongs to class: Kidney Renal Normal Tissue.'
        result4 = 'Kidney Renal Normal Tissue'
    elif(np.array(score).argmax() == 3):
        result = f'The RNA-seq data most likely belongs to class: Kidney Renal Clear Cell Carcinoma.'
        result4 = 'Kidney Renal Clear Cell Carcinoma'
    elif(np.array(score).argmax() == 4):
        result = f'The RNA-seq data most likely belongs to class: Lung Normal Tissue.'
        result4 = 'Lung Normal Tissue'
    elif(np.array(score).argmax() == 5):
        result = f'The RNA-seq data most likely belongs to class: Lung Adenocarcinoma.'
        result4 = 'Lung Adenocarcinoma'
    elif(np.array(score).argmax() == 6):
        result = f'The RNA-seq data most likely belongs to class: Uterine Corpus Endometrial Normal Tissue.'
        result4 = 'Uterine Corpus Endometrial Normal Tissue'
    elif(np.array(score).argmax() == 7):
        result = f'The RNA-seq data most likely belongs to class: Uterine Corpus Endometrial Carcinoma.'
        result4 = 'Uterine Corpus Endometrial Carcinoma'
    else:
        result = 'error'
    
    result += ' Below is the probability distribution from which the prediction was formed upon.'

    result2 = f'{np.array(score)}'
    result3 = '(Left to right): BRCA.N, BRCA.T, KIRC.N, KIRC.T, LUAD.N, LUAD.T, UCEC.N, UCEC.T'
    response = {
        'result': result,
        'result2': result2,
        'result3': result3, 
        'result4': result4
    }
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True, port=5001)

"""
const responseArray = prediction 
      .replace('[', '') // Remove opening square bracket
      .replace(']', '') // Remove closing square bracket
      .split(' ') // Split the string into an array of substrings
      .map(Number); // Convert each substring to a number

    const responseArray2 = responseArray.filter((value) => value !== 0);
    setmaxIndex(responseArray2.indexOf(Math.max(...responseArray2)));
    console.log(responseArray2)
    console.log(Math.max(...responseArray2))
    console.log(responseArray2.indexOf(Math.max(...responseArray2)))
    if (maxIndex === 0) {
      setresponse('The RNA-seq data most likely belongs to class: Breast Normal Tissue.');
    } else if (maxIndex === 1) {
      setresponse('The RNA-seq data most likely belongs to class: Breast Invasive Carcinoma.');
    } else if (maxIndex === 2) {
      setresponse('The RNA-seq data most likely belongs to class: Kidney Renal Normal Tissue.');
    } else if (maxIndex === 3) {
      setresponse('The RNA-seq data most likely belongs to class: Kidney Renal Clear Cell Carcinoma.');
    } else if (maxIndex === 4) {
      setresponse('The RNA-seq data most likely belongs to class: Lung Normal Tissue.');
    } else if (maxIndex === 5) {
      setresponse('The RNA-seq data most likely belongs to class: Lung Adenocarcinoma.');
    } else if (maxIndex === 6) {
      setresponse('The RNA-seq data most likely belongs to class: Uterine Corpus Endometrial Normal Tissue.');
    } else if (maxIndex === 7) {
      setresponse('The RNA-seq data most likely belongs to class: Uterine Corpus Endometrial Carcinoma.');
    } else if (maxIndex === 8){
      setresponse('NA');
    }
"""
