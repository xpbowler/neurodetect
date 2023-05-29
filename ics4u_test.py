#run: export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model
import autokeras as ak

model_general = load_model("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/ics4u_cnn2",custom_objects=ak.CUSTOM_OBJECTS)

#kirc_n
img = tf.keras.utils.load_img("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/c_images/test/kirc_n/n108.png", target_size=(133,150))
img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
predictions = model_general.predict(img_array)
score = tf.nn.softmax(predictions[0])
print(f'{score} {np.array(score).argmax()}')

#kirc_t
img = tf.keras.utils.load_img("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/c_images/test/kirc_t/t113.png", target_size=(133,150))
img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
predictions = model_general.predict(img_array)
score = tf.nn.softmax(predictions[0])
print(f'{score} {np.array(score).argmax()}')

#luad_n
img = tf.keras.utils.load_img("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/c_images/test/luad_n/n105.png", target_size=(133,150))
img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
predictions = model_general.predict(img_array)
score = tf.nn.softmax(predictions[0])
print(f'{score} {np.array(score).argmax()}')

#luad_t
img = tf.keras.utils.load_img("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/c_images/test/luad_t/t89.png", target_size=(133,150))
img_array = tf.expand_dims(tf.keras.utils.img_to_array(img),0)
predictions = model_general.predict(img_array)
score = tf.nn.softmax(predictions[0])
print(f'{score} {np.array(score).argmax()}')