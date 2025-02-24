import jwt
from functools import wraps
from flask import request, jsonify

# Defina sua secret key aqui. Em produção, armazene essa chave em variáveis de ambiente.
SECRET_KEY = "sistemadeautentificacao1231231231231231212312312123123123123123!"


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        # O token é esperado no header Authorization no formato "Bearer <token>"
        auth_header = request.headers.get("Authorization", None)
        if auth_header:
            parts = auth_header.split()
            if len(parts) == 2 and parts[0].lower() == "bearer":
                token = parts[1]

        if not token:
            return jsonify({"error": "Token is missing"}), 401

        try:
            jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 401

        return f(*args, **kwargs)
    return decorated
