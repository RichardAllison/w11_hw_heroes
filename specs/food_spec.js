const assert = require("assert");
const Food = require("../food.js");

describe("Food Tests", function (){

  let food;

  beforeEach("Setup", function (){
    food = new Food("Ambrosia");
  })

  it ("should have a name", function (){
    assert.strictEqual(food.name, "Ambrosia");
  })

  xit ("should have a replenishment value", function (){

  })

})
