const assert = require("assert");
const Task = require("../task.js");

describe("Task Tests", function (){

  let task1;
  let task2;

  beforeEach("Setup", function (){
    task1 = new Task("Fight Trojans", 10);
    task2 = new Task("Run marathon (against a tortoise) in Olympic games", 1);
  })

  it ("should have a description", function (){
    assert.strictEqual(task1.description, "Fight Trojans");
  })

  it ("should have a difficulty level", function (){
    assert.strictEqual(task1.difficulty, 10);
  })

  xit ("should have an urgency level", function (){

  })

  xit ("should have a reward", function (){

  })

  xit ("should be able to be marked as completed", function (){

  })

})
