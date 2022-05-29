from flask import Flask, request, Response
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

@app.route('/',methods=['GET'])
def home():
  limit = request.args
  limitNumber = limit.get('limit',default=30,type=int)
  print(limitNumber)

  
  if request.method == 'GET':

    # headers parameter is passed as reddit's api only works when a user agent is applied
    
    
    data = requests.get(f"https://www.reddit.com/r/images/new.json?limit={limitNumber}",headers = {'User-agent': 'bot 0.1'})
   

    filter_data = data.json()['data']['children']
    url_list = []
    video_list = []
    for i in range(limitNumber):
    
      if filter_data[i]['data']['domain']=="i.redd.it":
        url_list.append(filter_data[i]['data']['url'])
      if filter_data[i]['data']["is_video"]==True:
        video_list.append(filter_data[i]['data']['media']["reddit_video"]["fallback_url"])

    return Response(json.dumps({'img':url_list,'videos':video_list}),mimetype='application/json')
    


if __name__=="__main__":
  app.run(host='localhost',port=5000,debug=True)