import jwt
from datetime import datetime, timedelta
from flask import Blueprint, request, jsonify
from db import get_connection  # Importa a função de conexão

auth_bp = Blueprint("auth", __name__)

# Defina sua secret key. Idealmente, essa chave deve estar em variáveis de ambiente.
SECRET_KEY = "sistemadeautentificacao1231231231231231212312312123123123123123!"

@auth_bp.route("/", methods=["POST"])
def authenticate():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Dados não enviados"}), 400

    email = data.get("email")
    senha = data.get("senha")

    if not email or not senha:
        return jsonify({"error": "Email e senha são obrigatórios"}), 400

    user = None

    # Tenta autenticar na tabela 'users'
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT id, nome, email, senha FROM users WHERE email = %s", (email,))
        user_data = cur.fetchone()
        cur.close()
        conn.close()
    except Exception as e:
        return jsonify({"error": "Erro no banco de dados", "details": str(e)}), 500

    if user_data:
        # user_data: (id, nome, email, senha)
        if user_data[3] == senha:
            user = {
                "id": user_data[0],
                "nome": user_data[1],
                "email": user_data[2],
                "role": "user"
            }

    # Se não encontrou na tabela 'users', tenta na tabela 'responsaveis'
    if not user:
        try:
            conn = get_connection()
            cur = conn.cursor()
            cur.execute("SELECT id, nome, email, senha FROM responsaveis WHERE email = %s", (email,))
            responsavel_data = cur.fetchone()
            cur.close()
            conn.close()
        except Exception as e:
            return jsonify({"error": "Erro no banco de dados", "details": str(e)}), 500

        if responsavel_data and responsavel_data[3] == senha:
            user = {
                "id": responsavel_data[0],
                "nome": responsavel_data[1],
                "email": responsavel_data[2],
                "role": "responsavel"
            }

    if not user:
        return jsonify({"error": "Credenciais inválidas"}), 401

    # Cria o payload do token, com expiração de 30 dias
    payload = {
        "id": user["id"],
        "nome": user["nome"],
        "email": user["email"],
        "role": user["role"],
        "exp": datetime.utcnow() + timedelta(days=30)
    }

    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

    return jsonify({"token": token})
