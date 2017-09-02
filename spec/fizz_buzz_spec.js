describe("FizzbuzzCalc", function(){
  var calculator;

  beforeEach(function() {
    calculator = new FizzbuzzCalc();
  });

  it("returns fizzbuzz if number is divisible by 15", function(){
    expect(calculator.fizzbuzzRules(15)).toEqual('fizzbuzz');
  });

  it("returns buzz if number is divisible by 5", function(){
    expect(calculator.fizzbuzzRules(25)).toEqual('buzz');
  });

  it("returns fizz if number is divisible by 3", function(){
    expect(calculator.fizzbuzzRules(33)).toEqual('fizz');
  });

  it("returns number if fizz, buzz or fizzbuzz do not fit the scenario", function(){
    expect(calculator.fizzbuzzRules(1)).toEqual(1);
  });
});
