"""
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:

    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

Examples:

SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
"""

def series_sum(n):
    i = 4
    result = 0
    if n > 1:
        while n > 1:
            result += 1 / i
            i += 3
            n -= 1
        result += 1
    else:
        result = n
    return "{:0.2f}".format(result)

print(series_sum(2))

"""

    : introduces the format spec

    0 enables sign-aware zero-padding for numeric types

    .2 sets the precision to 2

    f displays the number as a fixed-point number

BEST PRACTICES:

def series_sum(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))

"""