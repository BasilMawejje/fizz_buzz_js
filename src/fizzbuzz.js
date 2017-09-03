function FizzbuzzCalc(){

}

FizzbuzzCalc.prototype.fizzbuzzRules = function(number) {
  switch(true){
    case (number%15===0):
      return "fizzbuzz";
      break;

    case (number%3===0):
      return "fizz";
      break;

     case (number%5===0):
      return "buzz";
      break;

     default:
      return number;
      break;
    }
};
