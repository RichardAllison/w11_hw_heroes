const assert = require("assert");
const Hero = require("../hero.js");

describe("Hero Tests", function (){

  let hero;

  beforeEach("Setup", function (){
    hero = new Hero("Achilles", "Ambrosia");
  })

  it ("should have a name", function (){
    assert.strictEqual(hero.name, "Achilles")
  })

  it ("should have health", function (){
    assert.strictEqual(hero.health, 100)
  })

  xit ("should have a favourite food", function (){

  })

  xit ("should be able to talk saying their names", function (){

  })

  xit ("should have a collection of tasks to complete", function (){

  })

})
