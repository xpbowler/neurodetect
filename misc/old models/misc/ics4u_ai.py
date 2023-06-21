#run: export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python
import numpy as np
import pandas as pd
import tensorflow as tf
import autokeras as ak
import matplotlib.pyplot as plt
from tensorflow import keras

batch_size = 32
img_height = 133
img_width = 150

# Use 20% data as testing data.
train_data = ak.image_dataset_from_directory("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/c_images/train",seed=123,image_size=(img_height, img_width),batch_size=batch_size,)
test_data = ak.image_dataset_from_directory("/Users/ryan_n/BRCA_ML/BRCA_ML/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website/c_images/test",seed=123,image_size=(img_height, img_width),batch_size=batch_size,)

#create and evaluate model
clf = ak.ImageClassifier(max_trials=1)
clf.fit(train_data)

model = clf.export_model()
model.summary()
model.save("ics4u_cnn2",save_format="tf")

print(clf.evaluate(test_data))