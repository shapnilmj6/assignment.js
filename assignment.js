// https://github.com/shapnilmj6/assignment.js

//problem-1:

function kilometerToMeter(kilometer) {
    const meter = kilometer / 1000;
    return meter;
}
const TamimMeter = kilometerToMeter(2000);
console.log(TamimMeter);

//problem-2:

function budgetCalculator(watch,phone,laptop){
    var watchPrice = watch * 50;
    var phonePrice= phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
  }
  var price = budgetCalculator(7,5,3);
  console.log(price);

//problem-3:

function hotelCost(daysStayed){
    const result = daysStayed * 100;
    return result;
}
const total = hotelCost(9);
console.log(total);

//problem-4:

function megaFriend(myFriends) {
    let word = "";
    for (let i = 0; i < myFriends.length; i++) {
      if (word.length < myFriends[i].length) {
        word = myFriends[i];
      }
    }
    return word;
  }
  console.log(megaFriend(['Tamim', 'Liton','Shakib', 'Mushfiq']));
