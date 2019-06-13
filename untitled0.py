# -*- coding: utf-8 -*-
"""
Created on Tue May  8 13:33:25 2018

@author: Admin
"""

import sys
from pyspark import SparkContext

if __name__ == "__main__":
    sc = SparkContext("local[3]", "word count")
    
    sc.setLogLevel("ERROR")
    
    lines = sc.textFile("in/word_count.text")
    
    words = lines.flatMap(lambda line: line.split(" "))
    
    wordCounts = words.countByValue()
    for word, count in wordCounts.items():
        print(word, count)