import requests

url = 'http://wa.amu.edu.pl/wa/en/MA_Language_Mind_Technology'

response = requests.get(url)
print(response.content)
