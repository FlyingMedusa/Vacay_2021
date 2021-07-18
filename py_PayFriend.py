class PayFriend:

    def __init__(self, type, owner, balance):
        self.type = type
        self.owner = owner
        self.balance = balance

    def withdraw(self, amount):
        self.balance -= amount
    
    def deposit(self, amount):
        self.balance += amount

    def check_balance(self):
        print("Dear {}, you have {} on your bank account".format(self.owner, self.balance))


Cassie = PayFriend('regular', 'Cassie Shore', 1200)

Cassie.check_balance()
Cassie.withdraw(150)
Cassie.check_balance()
Cassie.deposit(400)
Cassie.check_balance()