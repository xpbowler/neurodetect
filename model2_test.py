#run: export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python
import numpy as np
import pandas as pd
import tensorflow as tf
import autokeras as ak
from tensorflow.keras.models import load_model

model_brca = load_model("/Users/ryan_n/BRCA_ML/BRCA_ML/CNN Models/brca_model2",custom_objects=ak.CUSTOM_OBJECTS)

img = tf.keras.utils.load_img("/Users/ryan_n/BRCA_ML/BRCA_ML/Data/brca_images/n/n29.png", target_size=(133,150))
img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
prediction = model_brca.predict(img_array)
score = tf.nn.softmax(prediction[0])
if(prediction[0]<0.5):
    print(f'This image most likely belongs to the class normal tissue with a {100 * np.max(score)} percent confidence')
elif(prediction[0]>0.5):
    print(f'This image most likely belongs to the class breast cancer tumor with a {100 * np.max(score)} percent confidence')
else:
    print("Error")