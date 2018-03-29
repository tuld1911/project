# -*- coding: utf-8 -*-
"""
Created on Thu Mar 22 13:55:18 2018

@author: Admin
"""

# -*- coding: utf-8 -*-
"""
Created on Tue Feb  6 13:46:50 2018

@author: Admin
"""

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
import glob
from sklearn.calibration import CalibratedClassifierCV
import numpy as np
from pyvi.pyvi import ViTokenizer
from sklearn.naive_bayes import BernoulliNB, MultinomialNB
import pickle

#using pyvi to tokenize
def tokenize_document(document):
    return ViTokenizer.tokenize(document)


#define function to get stop words list from existing file
def get_stop_words():
    stop_words = open('vietnamese-stopwords-dash.txt', encoding='utf-8').readlines()
    stop_words = [sw.strip() for sw in stop_words]
    return stop_words
#build tuple from training data
def build_tuples(list_of_topics):
    tuples = []
    for topic in list_of_topics:
        print('[Reading folder] ' + str(topic))
        all_files = glob.glob("data/" + str(topic) + "/*.txt")
        for f in all_files:
            print('[Reading file] ' + str(f))
            s = open(f, encoding='utf-8').read()
            s_token = tokenize_document(s)
            d_tup = (topic, s_token)
            tuples.append(d_tup)
    return tuples
    
def build_test_tuple(list_of_topics):
    tuples = []
    for topic in list_of_topics:
        print('[Reading folder] ' + str(topic))
        all_files = glob.glob(str(topic) + "/*.txt")
        for f in all_files:
            print('[Reading file] ' + str(f))
            s = open(f, encoding='utf-8').read()
            s_token = tokenize_document(s)
            d_tup = (topic, s_token)
            tuples.append(d_tup)
    return tuples
    
def create_training_data(tuples):
    #get stop words list
    stop_words = get_stop_words()
    
    #create the training data class labels
    y = [d[0] for d in tuples]
    
    #create the corpus
    corpus = [d[1] for d in tuples]
    #create the count vectorizer and transform the corpus
    vectorizer = TfidfVectorizer(min_df=1, stop_words=stop_words)
    X = vectorizer.fit_transform(corpus)
    return X, y, vectorizer

def creat_testing_data(tuples, vectorizer):
    #create the training data class labels
    y = [d[0] for d in tuples]
    
    #create the corpus
    corpus = [d[1] for d in tuples]
    
    X = vectorizer.transform(corpus)
    return X, y
#define svm model
def train_svm(X, y):
    print('training svm...')
    svm = MultinomialNB(alpha=.01)
    calibration_svm = CalibratedClassifierCV(svm)
    calibration_svm.fit(X, y)
    svm.fit(X, y)
    print('trained...')
    return calibration_svm, svm

#main function
if __name__ == "__main__":
    #define list of topics
    list_of_topics = ['ChinhTri', 'DoiSong', 'KhoaHoc', 'KinhDoanh', 'PhapLuat',
                      'SucKhoe', 'TheGioi', 'TheThao', 'VanHoa', 'ViTinh']
    print('get training file')
    tuples = build_tuples(list_of_topics)
    print('get testing file')
    test_tuples = build_test_tuple(['ViTinh'])
    print('create training data')
    X_train, y_train, vectorizer = create_training_data(tuples)
    print('creating testing data')
    X_test, y_test = creat_testing_data(test_tuples, vectorizer)
    
    svm, svm_ori = train_svm(X_train, y_train)
    
    filename = 'naive_bayes.sav'
    pickle.dump(svm, open(filename, 'wb'))
    filename = 'naive_bayes_ori.sav'
    pickle.dump(svm_ori, open(filename, 'wb'))
    