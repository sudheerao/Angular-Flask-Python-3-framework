from flask import Flask

# http://flask.pocoo.org/docs/0.10/patterns/appfactories/


def create_app(config_filename):
    app = Flask(__name__)
    app.config.from_object(config_filename)

    from app.basemodels import db
    db.init_app(app)

    # Blueprints
    from app.customers.views import customers
    app.register_blueprint(customers, url_prefix='/api/v1/customers')

    return app
