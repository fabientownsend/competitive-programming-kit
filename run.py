#!/usr/local/bin/python3

import math

arr = [
'2',
'4',
'5',
'1 4 5 3 2',
'4',
'4',
'2 2 4 3',
]

def input():
    return arr.pop(0)

# Enter your code here. input input from STDIN. Print output to STDOUT

nb_of_problems = int(input())

solutions = []
for _ in range(nb_of_problems):
    coin = int(input())
    nb_of_icecream = int(input())
    icecream = list(map(int, input().split()))
    combinsation = {}

    for index in range(len(icecream)):
        look_up_for = coin - icecream[index]

        if look_up_for in combinsation:
            solutions.append([combinsation[look_up_for], index + 1])
            break

        combinsation[icecream[index]] = index + 1


for ans in solutions:
    print(" ".join(map(str, ans)))
