from flask import Flask, request, jsonify, send_from_directory
import pickle
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

# Load the trained model
with open('wqi.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/predict', methods=['POST'])  # Changed to POST method for sending data securely
def predict():
    try:
        # Get input data from the request
        user_input = request.json

        # Process user input
        features = [int(user_input.get('year')),
                    float(user_input.get('do')),
                    float(user_input.get('ph')),
                    float(user_input.get('co')),
                    float(user_input.get('bod')),
                    float(user_input.get('na')),
                    float(user_input.get('tc'))]
        print(features)

        # Make a prediction using the trained model
        wqi_prediction = model.predict([features])
        wqi_prediction = wqi_prediction[0]

        # Return prediction as JSON response
        return jsonify({'wqi_prediction': wqi_prediction}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/upload', methods=['POST'])  # Changed to POST method for sending data securely
def upload():
    try:
        # Get input data from the request
        user_input = request.json

        # Process user input
        info = [int(user_input.get('stationCode')),
                    str(user_input.get('location')),
                    str(user_input.get('state')),
                    float(user_input.get('temperature')),
                    float(user_input.get('dissolvedOxygen')),
                    float(user_input.get('potentialOfHydrogen')),
                    float(user_input.get('conductivity')),
                    float(user_input.get('biochemicalOxygenDemand')),
                    float(user_input.get('nitrateNitriteConcentration')),
                    float(user_input.get('fecalColiform')),
                    float(user_input.get('totalColiformsMean')),
                    int(user_input.get('year'))]
        print(info)
        # Return a success response
        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)