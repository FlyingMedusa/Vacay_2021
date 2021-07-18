class Methods_class:
    intro = 'Hi there!'

    def my_method():
        print("Just a method working fine")

    def subtractor(num_one, num_two):
        num_three = num_one - num_two
        print("{} - {} = {}".format(num_one, num_two, num_three))


print(Methods_class.intro)
Methods_class.subtractor(25,14)