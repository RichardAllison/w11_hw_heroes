const Hero = function (name, favourite_food) {
  this.name = name;
  this.favourite_food = favourite_food;
  this.health = 100;
}

Hero.prototype.talk = function () {
  return `I am ${this.name}`;
};

module.exports = Hero;
