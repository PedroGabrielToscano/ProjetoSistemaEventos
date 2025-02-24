from flask import Blueprint, request, jsonify
from db import get_connection  # Importa a função de conexão

users_bp = Blueprint("users", __name__)

# Rota para obter todos os usuários (exemplo de GET)
@users_bp.route("/", methods=["GET"])
def users_get():
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT id, nome, cpf, nascimento, email, phone FROM users;")
        users = cur.fetchall()
        cur.close()
        conn.close()  # Fecha a conexão após o uso
    except Exception as e:
        return jsonify({"error": "Erro ao obter usuários", "details": str(e)}), 500

    # Mapeia os resultados para uma lista de dicionários
    users_list = [
        {
            "id": row[0],
            "nome": row[1],
            "cpf": row[2],
            "nascimento": row[3].isoformat() if row[3] else None,
            "email": row[4],
            "phone": row[5]
        }
        for row in users
    ]
    return jsonify(users_list)

# Rota para inserir um novo usuário (exemplo de POST)
@users_bp.route("/", methods=["POST"])
def users_post():
    data = request.get_json()
    
    if not data:
        return jsonify({"error": "Nenhum dado enviado"}), 400

    # Captura os campos enviados
    nome = data.get("nome")
    cpf = data.get("cpf")
    nascimento = data.get("nascimento")
    email = data.get("email")
    phone = data.get("phone")
    senha = data.get("senha")
    
    # Validação de campos obrigatórios
    missing_fields = []
    if not nome:
        missing_fields.append("nome")
    if not cpf:
        missing_fields.append("cpf")
    if not email:
        missing_fields.append("email")
    if not senha:
        missing_fields.append("senha")
        
    if missing_fields:
        return jsonify({"error": "Campos obrigatórios faltando", "fields": missing_fields}), 400

    # Exemplo de validação adicional: CPF deve ter 11 dígitos
    if len(cpf) != 11 or not cpf.isdigit():
        return jsonify({"error": "CPF deve conter 11 dígitos numéricos"}), 400

    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            """
            INSERT INTO users (nome, cpf, nascimento, email, phone, senha) 
            VALUES (%s, %s, %s, %s, %s, %s) RETURNING id;
            """,
            (nome, cpf, nascimento, email, phone, senha)
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        return jsonify({"error": "Erro ao inserir usuário", "details": str(e)}), 500

    return jsonify({"msg": "Usuário criado", "id": new_id, "nome": nome}), 201

# Rota para deletar um usuário (exemplo de DELETE)
@users_bp.route("/", methods=["DELETE"])
def users_delete():
    data = request.get_json()
    
    if not data or "id" not in data:
        return jsonify({"error": "ID é obrigatório para deletar um usuário"}), 400

    user_id = data.get("id")
    
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM users WHERE id = %s;", (user_id,))
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        return jsonify({"error": "Erro ao deletar usuário", "details": str(e)}), 500

    return jsonify({"msg": "Usuário deletado"})
