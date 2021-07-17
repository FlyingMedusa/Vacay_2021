import requests

url= 'http://api.exchangeratesapi.io/v1/latest?access_key='

response = requests.get(url)
data = response.json()
data = data['rates']

for el in data:
    print(el,":", data[el])

currency = input('Choose your currency:\n')
amount = input('How much do you want to exchange to Euros?')
currency = currency.upper()
to_multiply = 1/data[currency]
converted = round(int(amount)*to_multiply, 2)
print('For {}{} we can give you {} Euros'.format(amount, currency, converted))