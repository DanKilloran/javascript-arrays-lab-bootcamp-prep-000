var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function() {
  return kittens.push("Ralph")
}

var destructivelyPrependKitten = function() {
  return kittens.unshift("Bob")
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
  return kittens
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
  return kittens
}
