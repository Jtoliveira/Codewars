"""
Complete the function that accepts a string parameter, 
and reverses each word in the string. 
All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps
"""
def reverse_words(text):

    words = text.split(" ")

    result = ""

    for word in words:
        for i in range(0, len(word)):
            result += word[len(word) - (i+1)]
        result += " "
    
    return result[:-1] #removes the last item in the result ( a trailing space)

print(reverse_words("cenas  e  coisas"))

"""
best practices:
def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))
"""