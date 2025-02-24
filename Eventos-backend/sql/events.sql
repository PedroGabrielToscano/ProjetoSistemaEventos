CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    data_Evento TIMESTAMP,
    local_Evento VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    responsavel_id INTEGER REFERENCES responsaveis(id) ON DELETE CASCADE
);