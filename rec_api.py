# -*- coding: utf-8 -*-
"""
Created on Fri Sep  4 08:17:02 2020

@author: daniy
"""
from flask import Flask, request, jsonify
from test1 import recommend
import pandas as pd
import numpy as np
import json
#import pickle

app = Flask(__name__)

#avoid switchind order of keys

app.config['JSON_SORT_KEYS'] = False


Food_titles_df = pd.read_csv(r'D:/pytrhon fyp/last3.csv',encoding = "utf-8");


#Api endpoint
#rest_id=0
@app.route('/api/', methods=['POST'])
def process_request():
   
#Parse received JSON request
    user_input = request.get_json()

    #Extract show title
    title_f = user_input['title']
  
    res= Food_titles_df.loc[Food_titles_df['name'] == title_f, 'res_id'].iloc[0]

#    print (res)
            
              
    #Call recommendation engine
    recommended_foods_dict = recommend(item_id=res, num=20) 
    
    
   # print(recommended_foods_dict)
    #recommend(rest_id,20)
    

    return jsonify(recommended_foods_dict)

@app.route('/search/', methods=['POST'])
def query_records():
    user_input = request.get_json()

    #Extract show title
    title_d = user_input['title']
  
    rest= Food_titles_df.loc[Food_titles_df['name'] == title_d,'name'].iloc[0]
    print (rest)
    return jsonify(rest)




if __name__ == '__main__':

    app.run()