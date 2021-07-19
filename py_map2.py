old_numbers = [1,2,3,4,5,6]
new_numbers = list(map(lambda x: x+9, old_numbers))

print(new_numbers)

old_tuple = (2,4,6,8,10)
new_tuple = tuple(map(lambda num: num*1000, old_tuple))

print(new_tuple)