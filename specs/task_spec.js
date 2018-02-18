const assert = require("assert");
const Task = require("../task.js");

describe("Task Tests", function (){

  let task;

  beforeEach("Setup", function (){
    task = new Task("Fight Trojans", 10, 10, "Proving your bravery");
  })

  it ("should have a description", function (){
    assert.strictEqual(task.description, "Fight Trojans");
  })

  it ("should have a difficulty level", function (){
    assert.strictEqual(task.difficulty, 10);
  })

  it ("should have an urgency level", function (){
    assert.strictEqual(task.urgency, 10);
  })

  it ("should have a reward", function (){
    assert.strictEqual(task.reward, "Proving your bravery");
  })

  it ("should start marked as uncompleted", function (){
    assert.strictEqual(task.completed, false);
  })

  it ("should be able to be marked as completed", function (){
    task.complete();
    assert.strictEqual(task.completed, true);
  })

})
