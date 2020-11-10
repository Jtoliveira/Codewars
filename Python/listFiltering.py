"""
In this kata you will create a function that takes a list of non-negative integers and 
strings and returns a new list with the strings filtered out.
"""

def filter_list(l):
    result = []
    #letters = "abcdefghijklmnopqrstuwvxyz"
    for item in l:
       if type(item) == int or type(item) ==  float:
           result.append(item)
    return result

print(filter_list([1, 2, 'aasf', '1', '123', 123]))

"""
best pratice:
def filter_list(l):
  'return a new list with the strings filtered out'
  return [i for i in l if not isinstance(i, str)]
"""