var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return[element, ...array]
  }
  
  function addElementToBeginningOfArray(array, element){
   array = [];
   const newArray = array.unshift(element); 
   return newArray
  }
  
 
  