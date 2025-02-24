from flask import Blueprint, request, jsonify
from db import get_connection  # Importa a função de conexão

pagamentos_bp = Blueprint("pagamentos", __name__)