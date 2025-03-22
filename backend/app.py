from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user = data.get('user')
    user_message = data.get('message')

    if not user_message or not user:
        return jsonify({'error': 'Missing user or message'}), 400

    bot_response = f"{user} said: {user_message}"
    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)

