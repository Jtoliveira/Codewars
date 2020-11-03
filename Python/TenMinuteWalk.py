"""
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
 The city provides its citizens with a Walk Generating App on their phones 
 -- everytime you press the button it sends you an array of one-letter strings representing directions to walk 
 (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and 
 you know it takes you one minute to traverse one city block, so create a function that will return true 
 if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will,
  of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters 
('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
"""
def is_valid_walk(walk):
    #determine if walk is valid
    result = False
    sides = 0
    vertical = 0
    if len(walk) < 10:
        return False
    else:
        for letter in walk:
            if letter == 'w':
                sides -= 1
            elif letter == 'e':
                sides += 1
            elif letter == 'n':
                vertical += 1
            elif letter == 's':
                vertical -= 1
        
        if sides == 0 and vertical == 0:
            result = True
        else:
            result = False

    return result

"""
best algorithm:
    def isValidWalk(walk):
    return len(walk) == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')
"""

