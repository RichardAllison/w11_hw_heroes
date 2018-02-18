const Hero = function (name, favourite_food) {
  this.name = name;
  this.favourite_food = favourite_food;
  this.health = 100;
  this.tasks = [];
};

Hero.prototype.talk = function () {
  return `I am ${this.name}`;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.eatFood = function (food) {
  if (food.name === this.favourite_food) {
    this.health += (food.replenishmentValue * 1.5);
  } else {
    this.health += food.replenishmentValue;
  }
};

Hero.prototype.sortTasksByDifficulty = function () {
  this.tasks.sort(function (firstOfTasks, secondOfTasks) {
    return secondOfTasks.difficulty - firstOfTasks.difficulty;
  });
};

Hero.prototype.sortTasksByUrgency = function () {
  this.tasks.sort(function (firstOfTasks, secondOfTasks) {
    return secondOfTasks.urgency - firstOfTasks.urgency;
  });
};

Hero.prototype.sortTasksByReward = function () {
  this.tasks.sort(function (firstOfTasks, secondOfTasks) {
    return secondOfTasks.reward - firstOfTasks.reward;
  });
};

module.exports = Hero;
