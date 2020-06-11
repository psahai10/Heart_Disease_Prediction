import os
import numpy as np
import flask
import pickle
from flask import Flask, render_template, request

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/heart_prediction.sqlite"

db = SQLAlchemy(app)

Base.prepare(db.engine, reflect=True)

age_data = Base.classes.age
chest_data = Base.classes.chest
fluoro_data = Base.classes.fluoro
gender_data = Base.classes.gender
heart_beat_data = Base.classes.heart_beat


@app.route('/')
@app.route('/index')
def index():
    return flask.render_template('index.html')

def ValuePredictor(to_predict_list):
    to_predict = np.array(to_predict_list).reshape(1,13)
    loaded_model = pickle.load(open("model.pkl","rb"))
    result = loaded_model.predict(to_predict)
    return result[0]
@app.route("/api/ageData")
def ageData():

    Samples =[
    Age_data.age, 
    Age_data.counts
    ]
    stmt = db.session.query(*Samples).all()

    age_result_data = []  

    for result in stmt: 
        age_result = {}
        age_result['age'] = result[0]
        age_result['counts'] = result[1]   
        age_result_data.append(age_result)

    return jsonify({"data" : age_result_data})

@app.route("/api/chestData")
def chestData():

    Samples =[
    chest_data.cp, 
    chest_data.counts
    ]

    stmt = db.session.query(*Samples).all()

    chest_result_data = []  

    for result in stmt: 
        chest_result = {}
        chest_result['cp'] = result[0]
        chest_result['counts'] = result[1]   
        chest_result_data.append(chest_result)

    return jsonify({"data" : chest_result_data})

@app.route("/api/fluoroData")
def fluoroData():

    Samples =[
    fluoro_data.ca, 
    fluoro_data.counts
    ]
    stmt = db.session.query(*Samples).all()

    fluoro_result_data = []  

    for result in stmt: 
        fluoro_result = {}
        fluoro_result['ca'] = result[0]
        fluoro_result['counts'] = result[1]   
        fluoro_result_data.append(fluoro_result)

    return jsonify({"data" : fluoro_result_data})


@app.route("/api/genderData")
def genderData():

    Samples =[
    gender_data.sex, 
    gender_data.counts
    ]
    stmt = db.session.query(*Samples).all()

    gender_result_data = []  

    for result in stmt: 
        gender_result = {}
        gender_result['sex'] = result[0]
        gender_result['counts'] = result[1]   
        age_result_data.append(gender_result)

    return jsonify({"data" : gender_result_data})

@app.route("/api/hbData")
def hbData():

    Samples =[
    hb_data.age, 
    hb_data.counts
    ]
    stmt = db.session.query(*Samples).all()

    hb_result_data = []  

    for result in stmt: 
        hb_result = {}
        hb_result['age'] = result[0]
        hb['counts'] = result[1]   
        hb_result_data.append(hb_result)

    return jsonify({"data" : hb_result_data})


@app.route('/result', methods = ['POST'])
def result():
    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list=list(to_predict_list.values())
        to_predict_list = list(map(int, to_predict_list))
        result = ValuePredictor(to_predict_list)
        if int(result)==1:
            prediction='Predicted No heart disease but please consult with a doctor'
        else:
            prediction='Predicted Heart Disease. Please go see doctor'
        return render_template("result.html", prediction=prediction)
        

if __name__ == "__main__":
    app.run(debug=True)
