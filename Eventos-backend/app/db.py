import psycopg2

# Configurações de conexão com o PostgreSQL
DB_HOST = "ep-wandering-queen-a5vwdea9-pooler.us-east-2.aws.neon.tech"  # ou o endereço do seu servidor
DB_PORT = "5432"                                                           # porta padrão do PostgreSQL
DB_NAME = "neondb"                                                         # nome do seu banco de dados
DB_USER = "neondb_owner"                                                   # seu usuário do banco de dados
DB_PASSWORD = "npg_AVqMaujfQ4E7"                                            # sua senha

def get_connection():
    """
    Cria e retorna uma nova conexão com o banco de dados PostgreSQL.
    """
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
