var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return [element, ...array]
  }
  
  function addElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
   
  }
  
 
  