var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [];
    array.unshift(element);
    return array
  }
  
  function addElementToBeginningOfArray(array, element){
   array = [];
   const newArray = array.unshift(element); 
   return newArray
  }
  
 
  