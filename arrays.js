var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
  return [element, ...array]
}

function descructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)  {
  return [...array, element];
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
  return array.slice(0, array.length - 1)
}

function accessElementInArray(array, index) {
  return array[index];
  return array[index]
}
  