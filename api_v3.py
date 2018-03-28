# -*- coding: utf-8 -*-
"""
Created on Tue Mar 27 16:58:25 2018

@author: Admin
"""

from pyvi.pyvi import ViTokenizer
import pickle
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS, cross_origin

def tokenize_document(document):
    return ViTokenizer.tokenize(document)

vectorizer_model = pickle.load(open('vectorizer_model_v3.sav', 'rb'))
svm_model = pickle.load(open('svm_model_v3.sav', 'rb'))
svm_ori_model = pickle.load(open('svm_ori_model_v3.sav', 'rb'))
classes = svm_model.classes_

app = Flask(__name__)
cors = CORS(app, resources={r"/predict": {"origins": "*"}}, methods=['GET'])

@app.route('/predict', methods=['GET'])
def get_prediction():
    text = request.args.get('value')
    s_token = tokenize_document(text)
    s_vec = vectorizer_model.transform([s_token])
    rs = svm_model.predict(s_vec)
    rs_proba = svm_model.predict_proba(s_vec)
    rs_proba_list = rs_proba.tolist()
    topic = ''
    if rs[0] == 'ChinhTri':
        topic = 'Chính Trị'
    if rs[0] == 'DoiSong':
        topic = 'Đời Sống'
    if rs[0] == 'KhoaHoc':
        topic = 'Khoa Học'
    if rs[0] == 'KinhDoanh':
        topic = 'Kinh Doanh'
    if rs[0] == 'PhapLuat':
        topic = 'Pháp Luật'
    if rs[0] == 'SucKhoe':
        topic = 'Sức Khỏe'
    if rs[0] == 'TheGioi':
        topic = 'Thế Giới'
    if rs[0] == 'TheThao':
        topic = 'Thể Thao'
    if rs[0] == 'VanHoa':
        topic = 'Văn Hóa'
    if rs[0] == 'ViTinh':
        topic = 'Vi Tính'
    return jsonify(
                result = topic,
                proba = rs_proba_list[0]
            )

@app.route('/test', methods=['GET'])
def test():
    s = request.args.get('value')
    return s

if __name__ == '__main__':
    app.run(threaded=True)