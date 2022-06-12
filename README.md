# Setting up the server:
1) cd server
2) Create a python virtual environment by typing ```python -m venv env```
3) Activate virtual environment by typing ```env\Scripts\Activate.ps1```
4) Install the required dependencies by typing ```pip install -r requirements```
5) Run the server by typing ```python app.py```
6) If everything is correctly followed, you will see json list of img urls on localhost:5000

# Setting up the client:
1) cd ..
2) cd client
3) install required dependencies ```npm i```
4) ```npm run dev```
5) If everything is correctly followed, you will see an image gallery of photos which were provided by the server

## Interview assignment edit:
### Frontend:
To change the api limit, simply put the number in the input field and press enter
You can view the object received from the server in the console

### Server:
To view the backend dyanmic routing, use the query parameter 'limit' to specify the api limit.
For example: localhost:5000?limit=10

Note: Default is 30
