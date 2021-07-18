import requests

url= 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

parameters = {
  'start':'1',
  'limit':'5',
  'convert':'USD'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': '',
}

session = requests.Session()
session.headers.update(headers)

response = session.get(url, params=parameters)
data = response.json()

print(data)