var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

<<<<<<< HEAD
function destructivelyAppendKitten (name) {
 return kittens.push(name);
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function prependKitten (name) {
  return [name, ...kittens];
}

function appendKitten (name) {
  return [...kittens, name] ;
}

function removeLastKitten() {
 return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
=======
function destructiveAppendKitten (name) {
  return name.push();
>>>>>>> 6f8ae12f0a585ecf6fc9cc9ea152b6021aa8694a
}