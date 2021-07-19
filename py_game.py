import random

class My_rpg:

    def __init__(self, race, strength, defence, magic, health, gold):
        self.race = race
        self.strength = strength
        self.defence = defence
        self.magic = magic
        self.health = health
        self.gold = gold

    def check_stats(self):
        print("YOUR STATS:")
        print("*"*55)
        print('\n{:<5}{:<10}{:<10}{:<10}{:<10}{:<10}'.format("",'strength', 'defence', 'magic', 'health', 'gold'))
        print('\n{:<5}{:<10}{:<10}{:<10}{:<10}{:<10}\n'.format("",self.strength, self.defence, self.magic, self.health, self.gold))
        print("*"*55)

    @staticmethod
    def roll_dice():
        return random.randint(1, 6)


class Elves(My_rpg):

    def __init__(self):
        My_rpg.__init__(self, 'elf', 7, 7, 8, 75, 2000)

    def attack(self, enemy_attack, enemy_hp):
        self.defence -= enemy_attack
        print("So the fight begins. . .")
        if self.defence > 0:
            enemy_life = enemy_hp - self.strength
            if enemy_life <= 0:
                print("You've killed him!")
            else:
                print("You're both alive but toq tired to keep on fighting")
        else:
            print("You died")


class Dwarves(My_rpg):
    
    def __init__(self):
        My_rpg.__init__(self, 'dwarf', 10, 9, 3, 100, 1000)

    def attack(self, enemy_attack, enemy_hp):
        HP = self.defence - enemy_attack
        if HP > 0:
            enemy_life = enemy_hp - self.strength
            if enemy_life <= 0:
                print("You've killed him!")
            else:
                print("You're both alive but toq tired to keep on fighting")
        else:
            print("You died")


class Wizards(My_rpg):
    
    def __init__(self):
        My_rpg.__init__(self, 'wizard', 4, 8, 10, 100, 500)

    def attack(self, enemy_attack, enemy_hp):
        HP = self.defence - enemy_attack
        if HP > 0:
            enemy_life = enemy_hp - self.strength
            if enemy_life <= 0:
                print("You've killed him!")
            else:
                print("You're both alive but toq tired to keep on fighting")
        else:
            print("You died")


class NPCs:
    def __init__(self, type, strength, defence, magic, health, reward):
        self.type = type
        self.strength = strength
        self.defence = defence
        self.magic = magic
        self.health = health
        self.reward = reward



#enemies
skeletor = NPCs('aggressive',4,5,0,3, 'a pile of bones')
ghost = NPCs('neutral',2,7,10,2, 'a heart stone')
dragon = NPCs('aggressive',9,9,2,10, 'an eye')

#locals
vendor = NPCs('calm',2,2,0,2, 'gold')
farmer = NPCs('calm',2,3,0,2, 'gold')
sailor = NPCs('calm',3,3,0,2, 'gold')


def main():

    print("Hello traveler!")
    name = input("Please tell me, what's your name?\t")
    race = int(input("Hi {}! Are you 1) an elf 2) a dwarf, or 3) a wizard?\t".format(name)))
    if race == 1:
        Character01 = Elves()
    elif race == 2:
        Character01 = Dwarves()
    elif race == 3:
        Character01 = Wizards()

    print("Great! Let's start your adventure and check your stats. . .")
    Character01.check_stats()

    print("\nCHAPTER 1")
    print("You walk slowly through a city when a vendor approaches")
    print('VENDOR: "Ay ay! Want to buy some jewels?')
    print("You don't have $4000 so")
    reaction = int(input("do you want to: 1) ignore the vendor, 2) kill the vendor?"))
    if reaction == 1:
        pass
    elif reaction == 2:
        Character01.attack(vendor.strength, vendor.defence)

    Character01.check_stats()


if __name__ == "__main__":
    main()

