from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

app = Flask(__name__)
CORS(app)

model = load_model('./model/skin_cancer_model.h5')

class_labels = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']

@app.route('/')
def index():
    return 'Welcome to the Skin Cancer Detection API!'

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    image = Image.open(file.stream)
    image = image.resize((32, 32))
    image_array = np.array(image) / 255.0  
    image_array = np.expand_dims(image_array, axis=0)

    prediction = model.predict(image_array)
    
    print("Prediction Array:", prediction)
    
    predicted_class = np.argmax(prediction, axis=1)[0]
    confidence = float(prediction[0][predicted_class])
    predicted_label = class_labels[predicted_class]

    return jsonify({'label': predicted_label, 'confidence': confidence})

if __name__ == '__main__':
    app.run(port=5000)



