from flask import Flask
from flask_cors import CORS 
from routes.users import users_bp
from routes.responsaveis import responsaveis_bp
from routes.events import events_bp
from routes.pagamentos import pagamentos_bp
from routes.pagamentos import pagamentos_bp
from routes.auth import auth_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.register_blueprint(users_bp,url_prefix="/users")
app.register_blueprint(responsaveis_bp,url_prefix="/responsaveis")
app.register_blueprint(events_bp,url_prefix="/events")
app.register_blueprint(pagamentos_bp,url_prefix="/pagamentos")
app.register_blueprint(auth_bp,url_prefix="/auth")




@app.route("/")
def api_status():
    return "Ol[a]a]a[a]"

if __name__ == "__main__":
    app.run(debug=True,port=8585)