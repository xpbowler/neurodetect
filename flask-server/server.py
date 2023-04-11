#run: export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model
import autokeras as ak
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/",methods=["POST","GET"])
def predict():
    request.files["image"].save("frontend.png")
    model_brca = load_model("/Users/ryan_n/BRCA_ML/BRCA_ML/CNN Models/brca_model2",custom_objects=ak.CUSTOM_OBJECTS)
    img = tf.keras.utils.load_img("frontend.png", target_size=(133,150))
    img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
    prediction = model_brca.predict(img_array)
    prediction = model_brca.predict(img_array)
    score = tf.nn.softmax(prediction[0])
    if(prediction[0]<0.5):
        result = f'This image most likely belongs to the class normal tissue with a {100 * np.max(score)} percent confidence'
    elif(prediction[0]>0.5):
        result = f'This image most likely belongs to the class breast cancer tumor with a {100 * np.max(score)} percent confidence'
    else:
        result = f'Error'
    return result

if __name__ == "__main__":
    app.run(debug=True, port=5001)