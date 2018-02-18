const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");

describe("Hero Tests", function (){

  let hero;
  let task1;
  let task2;

  beforeEach("Setup", function (){
    hero = new Hero("Achilles", "Ambrosia");
    task1 = new Task("Fight Trojans", 10, 10, "Proving your bravery");
    task2 = new Task("Run marathon (against a tortoise) in Olympic games", 1, 0, "Proving Zeno wrong");
  })

  it ("should have a name", function (){
    assert.strictEqual(hero.name, "Achilles");
  })

  it ("should have health", function (){
    assert.strictEqual(hero.health, 100);
  })

  it ("should have a favourite food", function (){
    assert.strictEqual(hero.favourite_food, "Ambrosia");
  })

  it ("should be able to talk saying their names", function (){
    assert.strictEqual(hero.talk(), "I am Achilles");
  })

  it ("should have a collection of tasks to complete", function (){
    hero.addTask(task1);
    hero.addTask(task2);
    assert.strictEqual(hero.tasks.length, 2);
  })

})
