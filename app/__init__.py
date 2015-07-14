from flask import Flask


# http://flask.pocoo.org/docs/0.10/patterns/appfactories/
def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)

    from app.users.models import db
    db.init_app(app)

    #Blueprints
    from app.users.views import users
    app.register_blueprint(users, url_prefix='/users')

    return app
