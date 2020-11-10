"""
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

"""
#:b is a placeholder that turns the value into binary

def add_binary(a,b):
    return "{:b}".format(a+b)

print(add_binary(1,1))