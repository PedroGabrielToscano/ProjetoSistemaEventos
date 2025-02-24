from flask import Blueprint, request, jsonify
from db import get_connection  # Importa a função de conexão

responsaveis_bp = Blueprint("responsaveis", __name__)

# Rota para obter todos os responsáveis (exemplo de GET)
@responsaveis_bp.route("/", methods=["GET"])
def get_responsaveis():
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT id, nome, cnpj, email, phone FROM responsaveis;")
        responsaveis = cur.fetchall()
        cur.close()
        conn.close()
    except Exception as e:
        return jsonify({"error": "Erro ao obter responsáveis", "details": str(e)}), 500

    responsaveis_list = [
        {
            "id": row[0],
            "nome": row[1],
            "cnpj": row[2],
            "email": row[3],
            "phone": row[4]
        }
        for row in responsaveis
    ]
    return jsonify(responsaveis_list)

# Rota para inserir um novo responsável (exemplo de POST)
@responsaveis_bp.route("/", methods=["POST"])
def responsaveis_post():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Nenhum dado enviado"}), 400

    # Captura os campos do JSON
    nome = data.get("nome")
    cnpj = data.get("cnpj")
    email = data.get("email")
    phone = data.get("phone")
    senha = data.get("senha")

    # Validação de campos obrigatórios
    missing_fields = []
    if not nome:
        missing_fields.append("nome")
    if not cnpj:
        missing_fields.append("cnpj")
    if not email:
        missing_fields.append("email")
    if not senha:
        missing_fields.append("senha")
    
    if missing_fields:
        return jsonify({"error": "Campos obrigatórios faltando", "fields": missing_fields}), 400

    # Validação do CNPJ: deve conter 14 dígitos numéricos
    if len(cnpj) != 14 or not cnpj.isdigit():
        return jsonify({"error": "CNPJ deve conter 14 dígitos numéricos"}), 400

    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            """
            INSERT INTO responsaveis (nome, cnpj, email, phone, senha) 
            VALUES (%s, %s, %s, %s, %s) RETURNING id;
            """,
            (nome, cnpj, email, phone, senha)
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        return jsonify({"error": "Erro ao inserir responsável", "details": str(e)}), 500

    return jsonify({"msg": "Responsável criado", "id": new_id}), 201

# Rota para deletar um responsável (exemplo de DELETE)
@responsaveis_bp.route("/", methods=["DELETE"])
def responsaveis_delete():
    data = request.get_json()
    
    if not data or "id" not in data:
        return jsonify({"error": "ID é obrigatório para deletar um responsável"}), 400

    responsavel_id = data.get("id")
    
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM responsaveis WHERE id = %s;", (responsavel_id,))
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        return jsonify({"error": "Erro ao deletar responsável", "details": str(e)}), 500

    return jsonify({"msg": "Responsável deletado"})
