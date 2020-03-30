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
