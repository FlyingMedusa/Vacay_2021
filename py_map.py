list_of_nums = [1, 13, 131, 1313, 13131]
list_of_large_nums = []

'''
for i in list_of_nums:
    larger = i*1000
    list_of_large_nums.append(larger)

map(name of a function, name of a list)
'''

def multiplier(x):
    y = x*1000
    return y

list_of_large_nums =  list(map(multiplier, list_of_nums))
