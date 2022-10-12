/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  // createa a new arry from calling a functions for every array element 
  // call a function once for each element in an array
  ///  
  let arr =[]; 
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined){
            continue; 
        }
        arr.push(callbackFn(this[i], i, this)); 
    }
    return arr; 

};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  let arr = []; 
    for(let i = 0; i< this.length; i++){
        if(this[i] === undefined){
            continue; 
        }
        if(callbackFn(this[i], i, this)){
            arr.push(this[i]); 
        }
    }
    return arr; 
}
// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined){
        continue; 
    }
    if(callbackFn(this[i], i, this)){
        return true; 
    } 
}
return false; 
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined){
        continue; 
    }
    if(!(callbackFn(this[i], i, this))){
        return false; 
    } 
}
return true; 
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let sum = any; 
    for(let i = 0; i< this.length; i++){
        if(any === undefined && i ==0){
            sum = this[i]; 
            continue;
        }
        sum = callbackFn(sum, this[i], i, this); 
    }
    return sum; 
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.

  let arr=[any]
  for(let i =0; i< this.length;i++){
   if( searchElement === this[i]){
       return true
   
     } else if (searchElement != this[i]){
       continue
     } else {

       return false;
     }
  }

};



// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  let arr=[any]
  for(let i =0; i< this.length;i++){
   if( searchElement === this[i]){
       return this[i];
   
     } else if (searchElement != this[i]){
       continue
     } else {
       return -1;
     }
  }
 };


// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  let arr=[any]
 for(let i =this.length; 0< i;i--){
  if( searchElement === this[i-1]){
      return this[i-1];
  
    } else if (searchElement != this[i-1]){
      continue
    } else {
      return -1;
    }
 }
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  let arr = []; 
  for(let objKey in obj){
      arr.push(objKey); 
  }
  return arr; 
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  let arr = []; 
  for(let objKey in obj){
      arr.push(obj[objKey]); 
  }
  return arr; 
};
