var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element){
   array = [];
   array.unshift(element); 
   var newArray = array;
   return newArray
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){ 
    array = [];
    array.unshift(element);
    return array
    
  }