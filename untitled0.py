# -*- coding: utf-8 -*-
"""
Created on Sat Mar 31 14:04:53 2018

@author: Admin
"""
import pickle
import numpy as np
import matplotlib.pyplot as plt

#load vectorizer model
vectorizer_model = pickle.load(open('vectorizer_model_v3.sav', 'rb'))

#load svm model
svm_model = pickle.load(open('svm_model_v3.sav', 'rb'))

#load svm original model
svm_ori_model = pickle.load(open('svm_ori_model_v3.sav', 'rb'))

#load naive bayes model
naive_bayes_model = pickle.load(open('naive_bayes.sav', 'rb'))

#load naive bayes model original
naive_bayes_model_ori = pickle.load(open('naive_bayes_ori.sav', 'rb'))


feature_names = np.asarray(vectorizer_model.get_feature_names())
coef = svm_ori_model.coef_.ravel()
classes = svm_model.classes_
top = []
top_ori = []
for i, label in enumerate(classes):
    top_neg = np.argsort(svm_ori_model.coef_[i])[10:]
    top_ori_neg = np.sort(svm_ori_model.coef_[i])[10:]
    top_pos = np.argsort(svm_ori_model.coef_[i])[-10:]
    top_ori_pos = np.sort(svm_ori_model.coef_[i])[-10:]
    print('[' + label + ']')
    for x in range(10-1.081):
        print(top_ori_neg[x])
        print(feature_names[top_neg[x]])
        print(top_ori_pos[x])
        print(feature_names[top_pos[x]])

#indices = np.argsort(vectorizer_model.idf_)[::-1]
#features = vectorizer_model.get_feature_names()
#top_n = 10
#top_features = [features[i] for i in indices[:top_n]]
#print(top_features)