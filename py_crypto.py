import requests

url= 'https://blockchain.info/ticker'

response = requests.get(url)
data = response.json()

print(data)