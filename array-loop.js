// var numbers=[12,23,43,54,57,87,97];
// for(var i=0; i<=numbers.length; i++){
//   var number=numbers[i];
//   console.log(number);
// }
 var numbers=[12,23,43,43,643,34,23,533];
 for(var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  if(number > 40){
    // break;
    continue;
  }
  console.log(number);

 } 