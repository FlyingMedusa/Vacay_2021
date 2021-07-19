my_list = [1,14,54,78,33,74,443,23]
filtered_list = list(filter(lambda x: x%2==0, my_list))
print(filtered_list)

names = ['Joe', 'Marry', 'Esmeralda', 'Emma', 'Jonathan', 'Matt', 'Billy', 'Alice']
short_names = list(filter(lambda name: len(name)<5, names))
print(short_names)