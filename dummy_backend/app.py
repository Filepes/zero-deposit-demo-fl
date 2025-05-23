import os
from flask import Flask, jsonify, request, abort
from flask_swagger_ui import get_swaggerui_blueprint
from functools import wraps
from marshmallow import Schema, fields, ValidationError
from flask_cors import CORS
from dotenv import load_dotenv

app = Flask(__name__)

frontend_url = os.getenv('FRONTEND_URL')

CORS(app, origins=[frontend_url])

# Marshmallow Schemas
class UserSchema(Schema):
    username = fields.Str(required=True)
    role = fields.Str(required=True, validate=lambda x: x in ['admin', 'user'])

class HouseSchema(Schema):
    address = fields.Str(required=True)
    num_rooms = fields.Int(required=True)
    price = fields.Float(required=True)

# Mock database
users_db = {
    "admin": {"id": 1, "username": "admin", "role": "admin"},
    "user1": {"id": 2, "username": "user1", "role": "user"}
}

houses_db = {
    1: {"id": 1, "address": "123 Main St", "num_rooms": 3, "price": 250000},
    2: {"id": 2, "address": "Second street", "num_rooms": 4, "price": 1300},
    3: {"id": 3, "address": "Third Street", "num_rooms": 1, "price": 90000},
    4: {"id": 4, "address": " Fourth Street", "num_rooms": 300, "price": 10}

}

# Mock tokens
MOCK_TOKENS = {
    "admin": "mocked_admin_token",
    "user": "mocked_user_token"
}

# Swagger configuration
SWAGGER_URL = '/api/docs'
API_URL = '/static/swagger.json'

swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={'app_name': "Sample API"}
)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"error": "Token is missing"}), 401
            
        if token not in MOCK_TOKENS.values():
            return jsonify({"error": "Invalid token"}), 403
            
        request.current_user = next(
            (user for user in users_db.values() if MOCK_TOKENS[user['role']] == token),
            None
        )
        return f(*args, **kwargs)
    return decorated

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    role = data.get('role')
    if role not in MOCK_TOKENS:
        abort(400)
    return jsonify({"token": MOCK_TOKENS[role]})

@app.route('/api/users', methods=['GET'])
@token_required
def get_users():
    if request.current_user['role'] != 'admin':
        abort(403)
    return jsonify(list(users_db.values()))


@app.route('/api/user/<int:user_id>', methods=['GET'])
@token_required
def get_user(user_id):
    user = next((u for u in users_db.values() if u['id'] == user_id), None)
    if not user:
        abort(404)
    if request.current_user['role'] != 'admin' and request.current_user['id'] != user_id:
        abort(403)
    return jsonify(user)

@app.route('/api/user', methods=['POST'])
@token_required
def create_user():
    if request.current_user['role'] != 'admin':
        abort(403)
        
    try:
        UserSchema().load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    new_user = request.json
    existing_ids = [user['id'] for user in users_db.values()]
    new_id = max(existing_ids, default=0) + 1
    
    users_db[new_user['username']] = {
        "id": new_id,
        "username": new_user['username'],
        "role": new_user['role']
    }
    return jsonify(users_db[new_user['username']]), 201

@app.route('/api/houses', methods=['GET'])
@token_required
def get_houses():
    return jsonify(list(houses_db.values()))


@app.route('/api/house/<int:house_id>', methods=['GET'])
@token_required
def get_property(house_id):
    house = houses_db.get(house_id)
    if not house:
        abort(404)
    return jsonify(house)

@app.route('/api/house', methods=['POST'])
@token_required
def create_house():
    try:
        HouseSchema().load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    new_house = request.json
    new_id = max(houses_db.keys(), default=0) + 1
    houses_db[new_id] = {
        "id": new_id,
        "address": new_house['address'],
        "num_rooms": new_house['num_rooms'],
        "price": new_house['price']
    }
    return jsonify(houses_db[new_id]), 201


@app.route('/api/house/<int:house_id>', methods=['DELETE'])
@token_required
def delete_house(house_id):
    """
    This endpoint deletes a house from the database by id.
    
    - If the house does not exist it returns 404.
    - If the delete is successful it returns a success message.
    - If there is an error during the delete it sends an error message.
    """
    house = house_id
    if not house:
        abort(404)
    try:
        del houses_db[house_id]
        return jsonify({"message": "House deleted successfully"}), 200
    except Exception as err:
        return jsonify(err.messages), 500



if __name__ == '__main__':
    app.run(debug=True)