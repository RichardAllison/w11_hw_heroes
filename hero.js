const Hero = function (name, favourite_food) {
  this.name = name;
  this.favourite_food = favourite_food;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return `I am ${this.name}`;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

module.exports = Hero;
