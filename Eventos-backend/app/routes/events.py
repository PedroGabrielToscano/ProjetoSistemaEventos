from flask import Blueprint, request, jsonify
from db import get_connection  # Importa a função de conexão
from utils import token_required


events_bp = Blueprint("events", __name__)

# Rota para obter todos os eventos, com filtro opcional por responsavel_id
@events_bp.route("/", methods=["GET"])
@token_required
def get_events():
    responsavel_id = request.args.get("responsavel_id")
    
    conn = get_connection()
    cur = conn.cursor()
    
    if responsavel_id:
        cur.execute(
            """
            SELECT id, nome, descricao, imagem, data_Evento, local_Evento, responsavel_id
            FROM events
            WHERE responsavel_id = %s;
            """, (responsavel_id,)
        )
    else:
        cur.execute(
            """
            SELECT id, nome, descricao, imagem, data_Evento, local_Evento, responsavel_id
            FROM events;
            """
        )
    
    events = cur.fetchall()
    cur.close()
    conn.close()

    # Mapeia os resultados para uma lista de dicionários
    events_list = [
        {
            "id": row[0],
            "nome": row[1],
            "descricao": row[2],
            "imagem": row[3],
            "data_Evento": row[4].isoformat() if row[4] else None,
            "local_Evento": row[5],
            "responsavel_id": row[6]
        }
        for row in events
    ]
    
    return jsonify(events_list)

# Rota para inserir um novo evento (exemplo de POST)
@events_bp.route("/", methods=["POST"])
@token_required
def post_event():
    data = request.get_json()
    nome = data.get("nome")
    descricao = data.get("descricao")
    imagem = data.get("imagem")
    data_Evento = data.get("data_Evento")
    local_Evento = data.get("local_Evento")
    responsavel_id = data.get("responsavel_id")
    
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        """
        INSERT INTO events (nome, descricao, imagem, data_Evento, local_Evento, responsavel_id)
        VALUES (%s, %s, %s, %s, %s, %s) RETURNING id;
        """,
        (nome, descricao, imagem, data_Evento, local_Evento, responsavel_id)
    )
    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    
    return jsonify({"msg": "Evento criado", "id": new_id})

# Rota para deletar um evento (exemplo de DELETE)
@events_bp.route("/<int:event_id>", methods=["DELETE"])
@token_required
def delete_event(event_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM events WHERE id = %s;", (event_id,))
    conn.commit()
    cur.close()
    conn.close()
    
    return jsonify({"msg": "Evento deletado"})

@events_bp.route("/<int:event_id>", methods=["PUT"])
@token_required
def edit_event(event_id):
    data = request.get_json()

    # Verifica se há dados na requisição
    if not data:
        return jsonify({"msg": "Nenhum dado fornecido para atualização"}), 400

    campos = []
    valores = []

    # Adiciona os campos que devem ser atualizados
    for campo in ["nome", "descricao", "imagem", "data_Evento", "local_Evento", "responsavel_id"]:
        if campo in data and data[campo] is not None:
            campos.append(f"{campo} = %s")
            valores.append(data[campo])

    if not campos:
        return jsonify({"msg": "Nenhum campo válido para atualização"}), 400

    valores.append(event_id)  # Adiciona o ID ao final dos valores

    query = f"UPDATE events SET {', '.join(campos)} WHERE id = %s RETURNING id;"

    conn = get_connection()
    cur = conn.cursor()
    cur.execute(query, valores)
    
    updated_row = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    
    if updated_row:
        return jsonify({"msg": "Evento atualizado", "id": event_id})
    else:
        return jsonify({"msg": "Evento não encontrado"}), 404
