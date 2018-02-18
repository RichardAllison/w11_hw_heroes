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

module.exports = Hero;
