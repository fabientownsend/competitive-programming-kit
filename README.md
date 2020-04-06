This is was I used with [CodeForces](https://codeforces.com/)

What I use in order to progressively increase the difficulty of the problems [Junior Training Sheet](https://docs.google.com/spreadsheets/d/1iJZWP2nS_OB3kCTjq8L6TrJJ4o-5lhxDOyTaocSYc-k/edit#gid=84654839)

Must read [Competitive Programmer’s Handbook](https://cses.fi/book/book.pdf)

I start with JavaScript and them moved to Python as some problem JavaScript couldn't pass the tests
because of the numbers use. The first part is simple way to simlulate CodeForces API to get the data.

## Python example

### Documentation

You don't need to know the all language to use it in problem solving, here
is my notes regarding [Python notes](./docs/python.md)

How my code looks localy before submition
``` python
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
```

## JavaScript example
``` javascript
// prettier-ignore
var input = [
  '3',
  'LLR',
  '40 50 60',
];

function readline() {
  return input.shift();
}

function print(arg) {
  console.log(arg);
}

// submit code bellow

var nbOfElement = Number(readline());
var direction = readline();
var elements = readline()
  .split(' ')
  .map(Number);

var pair = [];
for (var i = 1; i < nbOfElement; ++i) {
  if (direction[i - 1] === 'R' && direction[i] === 'L') {
    pair.push([i - 1, i]);
  }
}

var smallestPair = Infinity;
for (var i = 0; i < pair.length; i++) {
  smallestPair = Math.min(
    smallestPair,
    Math.round((elements[pair[i][1]] - elements[pair[i][0]]) / 2),
  );
}

if (pair.length === 0) {
  print(-1);
} else {
  print(smallestPair);
}
```

## Workflow
![Problem solving workflow](docs/excalidraw-202021310434%20(1).png)
