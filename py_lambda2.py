list_one = [1,2,3,4,5]
list_two = [300, 400, 500]

list_three = list(map(lambda x, y: x+y, list_one, list_two))
print(list_three)