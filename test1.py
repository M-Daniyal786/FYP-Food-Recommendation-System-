
import flask
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import json

ds=pd.read_csv(r'D:/pytrhon fyp/last3.csv',encoding = "ISO-8859-1");


tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 3), min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(ds['cui1'])

cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)

results = {}    

for idx, row in ds.iterrows():
    similar_indices = cosine_similarities[idx].argsort()[:-100:-1]
    similar_items = [(cosine_similarities[idx][i], ds['res_id'][i]) for i in similar_indices]

    # First item is the item itself, so remove it.
    # Each dictionary entry is like: [(1,2), (3,4)], with each tuple being (score, item_id)
    results[row['res_id']] = similar_items[1:]
    
print('done!')

# hacky little function to get a friendly item name from the description field, given an item ID
def item(id):
    return ds.loc[ds['res_id'] == id]['name'].tolist()[0].split(' - ')[0]

# Just reads the results out of the dictionary. No real logic here.
def recommend(item_id, num):
    print("Recommending " + str(num) + " products similar to " + item(item_id) + "...")
    print("-------")
    my_list=[]
    recs = results[item_id][:num]   
    for rec in recs:
        print("Recommended: " + item(rec[1]) + " (score:" + str(rec[0]) + ")")  
        my_list.append(item(rec[1]))
    return my_list
    # json_string = json.dumps(my_list)
    # print (json_string)
    # return json_string    
# Just plug in any item id here (1-500), and the number of recommendations you want (1-99)
# You can get a list of valid item IDs by evaluating the variable 'ds', or a few are listed below

#recommend(item_id=18851371 , num=20)