""" 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes([]) # must be "no one likes this"
likes(["Peter"]) # must be "Peter likes this"
likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases.
"""

def likes(names):
    result = ""
    if len(names) == 0:
        result = "no one likes this"
    elif len(names) == 1:
        result = names[0] + " likes this"
    elif len(names) == 2:
        result =  "{name1} and {name2} like this".format(name1 = names[0], name2 = names[1])
    elif len(names) == 3:
        result =  "{name0}, {name1} and {name2} like this".format(name0 = names[0], name1 = names[1], name2 = names[2])
    else:
        result =  "{name0}, {name1} and {others} others like this".format(name0 = names[0], name1 = names[1], others = (len(names)-2))
    return result

