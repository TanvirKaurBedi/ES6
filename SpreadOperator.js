// It is like Rest Parameter with little difference.
// It replaces  apply method .
// It replaces concatenate 
// It replaces copy method
// --------------------------------------------------------
// Using apply method=>
//  function sum(a,b,c)
//  {
//      console.log(`Sum is ${a+b+c}`);
//  }
//  var arrVal = [1,2,3];
//   sum.apply(null,arrVal);
// ----------------------------------------------------------
// Using SpreadOperator
//  function sum(a,b,c)
//  {
//      console.log(`sum is ${a+b+c}`);
     
//  }
//  var arrVal = [1,2,3];
//  sum(...arrVal);
//  -----------------------------------------------------------
// function fun(...c)
// {
//   for(let i of arguments)
//   {
//       var total = 0;
//        total += i;
//   }
//   console.log(`sum is ${total}`);
// }
// var arrVal = [1,2,3,4];
// fun(...arrVal);
// ---------------------------------------------------------------
let arr1 = [1,2,3];
let arr2 = [4,5,6];
//  arr1 = arr1.concat(arr2);

arr1 = [...arr1,...arr2,9,10];
console.log(arr1);

