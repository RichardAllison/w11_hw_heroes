const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");

describe("Hero Tests", function () {

  let hero;
  let task1;
  let task2;
  let food1;
  let food2;

  beforeEach("Setup", function () {
    hero = new Hero("Achilles", "Ambrosia");
    task1 = new Task("Fight Trojans", 10, 10, 100);
    task2 = new Task("Run marathon (against a tortoise) in Olympic games", 1, 0, 200);
    food1 = new Food("Ambrosia", 100);
    food2 = new Food("τηγανίτης", 20);
  });

  it ("should have a name", function () {
    assert.strictEqual(hero.name, "Achilles");
  });

  it ("should have health", function () {
    assert.strictEqual(hero.health, 100);
  });

  it ("should have a favourite food", function () {
    assert.strictEqual(hero.favourite_food, "Ambrosia");
  });

  it ("should be able to talk saying their names", function () {
    assert.strictEqual(hero.talk(), "I am Achilles");
  });

  it ("should have a collection of tasks to complete", function () {
    hero.addTask(task1);
    hero.addTask(task2);
    assert.strictEqual(hero.tasks.length, 2);
  });

  it ("should be able to eat food, and health should go up by the replenishment value", function () {
    hero.eatFood(food2);
    assert.strictEqual(hero.health, 120);
  });

  it ("should increase health by 1.5 * value if eating favourite food", function () {
    hero.eatFood(food1);
    assert.strictEqual(hero.health, 250);
  });

  it ("should be able to sort their tasks by difficulty", function () {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task1);
    hero.sortTasksByDifficulty();
    assert.deepStrictEqual(hero.tasks, [task1, task1, task2]);
  });

  it ("should be able to sort their tasks by urgency", function () {
    hero.addTask(task2);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.sortTasksByUrgency();
    assert.deepStrictEqual(hero.tasks, [task1, task2, task2]);
  });

  it ("should be able to sort their tasks by reward", function () {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task2);
    hero.sortTasksByReward();
    assert.deepStrictEqual(hero.tasks, [task2, task2, task1]);
  });

  it ("should be able to view tasks that are marked as completed", function () {
    hero.addTask(task1);
    hero.addTask(task2);
    task1.complete();
    assert.deepStrictEqual(hero.viewCompleteTasks(), [task1]);
  });

  it ("should be able to view tasks that are marked as incomplete", function () {
    hero.addTask(task1);
    hero.addTask(task2);
    task1.complete();
    assert.deepStrictEqual(hero.viewIncompleteTasks(), [task2]);
  });


});
