from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Load the drinks from rows.json
@app.route('/api/drinks', methods=['GET'])
def get_drinks():
    with open('rows.json', 'r') as file:
        drinks = json.load(file)
    return jsonify(drinks)

# Get a specific drink by ID
@app.route('/api/drinks/<int:drink_id>', methods=['GET'])
def get_drink(drink_id):
    with open('rows.json', 'r') as file:
        drinks = json.load(file)
    drink = next((item for item in drinks if item['id'] == drink_id), None)
    if drink:
        return jsonify(drink)
    return jsonify({"error": "Drink not found"}), 404

# Add a drink to the cart (cart.json)
@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    new_item = request.json
    with open('cart.json', 'r+') as file:
        cart = json.load(file)
        cart.append(new_item)
        file.seek(0)
        json.dump(cart, file)
    return jsonify({"message": "Item added to cart"}), 201

# Delete a drink from the cart
@app.route('/api/cart/<int:drink_id>', methods=['DELETE'])
def delete_from_cart(drink_id):
    with open('cart.json', 'r+') as file:
        cart = json.load(file)
        cart = [item for item in cart if item['id'] != drink_id]
        file.seek(0)
        file.truncate()
        json.dump(cart, file)
    return jsonify({"message": "Item removed from cart"}), 200

if __name__ == '__main__':
    app.run(debug=True)
