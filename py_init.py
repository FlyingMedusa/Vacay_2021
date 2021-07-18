class Animals:
    def __init__(self, name, size, noise, color, num_of_legs):
        self.name = name
        self.size = size
        self.noise = noise
        self.color = color
        self.num_of_legs = num_of_legs
    
    def describe(self):
        print('The {} is {} and makes the noise: {}'.format(self.name, self.color, self.noise))

    def plus_size(self):
        self.size += 10
    
    def show_size(self):
        print("The size of {} is {}cm".format(self.name, self.size))


tiger = Animals('tiger', 150, 'Rawwwrrr', "orange and black", 4)
monkey = Animals('monkey', 120, 'Ooo', 'brown', 2)
anaconda = Animals('anaconda', 250, 'ssss', 'green', 0)
owl = Animals('owl', 30, "Hoohoo", 'brown', 2)


print(monkey.color)
anaconda.describe()
anaconda.show_size()
anaconda.plus_size()
anaconda.show_size()