var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element){
   var array = [];
   const newArray = array.unshift(element); 
   return newArray
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){ 
    var array = [];
    array.unshift(element);
    return array
    
  }