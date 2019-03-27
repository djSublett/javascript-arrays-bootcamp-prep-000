var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element){
   array = [];
   const newArray = array.unshift(element); 
   return newArray
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){ 
    array = [];
    array.unshift(element);
    return array
    
  }
  
  function addElementToEndOfArray(array, element) {
    array = [];
    array.push(element);
    return array
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    
  }
  