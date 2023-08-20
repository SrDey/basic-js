function bringShingara(money){
  var shingraPrice = 10;
  var quantity = money / shingraPrice;
  return quantity;
}
var myTaka=200;
var shingara = bringShingara(myTaka);
console.log('shingara pelam: ',shingara);