"""
Complete the solution so that the function will break up camel casing, using a space between words.
Example

solution("camelCasing")  ==  "camel Casing"
"""
import re #regular expressions

def solution(s):
    return re.sub('([A-Z])', r' \1', s)

#The re.sub() replace the substrings that match with the search pattern with a string of user’s choice.

#SYNTAX: re.sub(pattern, repl, string[, count, flags])

"""
When an "r" or "R" prefix is present, a character following a backslash is included in the string without change, and all backslashes are left in the string. 
For example, the string literal r"\n" consists of two characters: a backslash and a lowercase "n". String quotes can be escaped with a backslash, but the backslash remains in the string; for example,
 r"\"" is a valid string literal consisting of two characters: a backslash and a double quote; r"\" is not a valid string literal (even a raw string cannot end in an odd number of backslashes). 
 Specifically, a raw string cannot end in a single backslash (since the backslash would escape the following quote character). 
Note also that a single backslash followed by a newline is interpreted as those two characters as part of the string, not as a line continuation.
"""
