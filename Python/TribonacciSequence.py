"""
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) 
numbers of the sequence to generate the next.

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), 
we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? 
As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place,
 you may be tempted to think that we would get the same sequence shifted by 2 places, 
 but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that 
given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, 
then return an empty array
"""

def tribonacci(signature, n):
    print(signature)
    print(n)
    result = []
    i = 3
    if n == 0:
         return result 
    elif n > 0 and n < 3:
        return signature[0:n]
    else:
         result = signature
    while i < n:
        a = result[i-1]
        b = result[i-2]
        c = result[i-3]
        result.append(a+b+c)
        i += 1

    return result

print(tribonacci([1,1,1], 1))