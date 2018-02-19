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

// Hero.prototype.sortTasksByDifficulty = function () {
//   this.tasks.sort(function (firstOfTasks, secondOfTasks) {
//     return secondOfTasks.difficulty - firstOfTasks.difficulty;
//   });
// };
//
// Hero.prototype.sortTasksByUrgency = function () {
//   this.tasks.sort(function (firstOfTasks, secondOfTasks) {
//     return secondOfTasks.urgency - firstOfTasks.urgency;
//   });
// };
//
// Hero.prototype.sortTasksByReward = function () {
//   this.tasks.sort(function (firstOfTasks, secondOfTasks) {
//     return secondOfTasks.reward - firstOfTasks.reward;
//   });
// };

Hero.prototype.sortTasks = function(sortBy, orderBy) {
  if (orderBy === "ascending") {
    this.tasks.sort(function (a, b) {
      return a[sortBy] - b[sortBy];
    });
  }
  if (orderBy === "descending") {
    this.tasks.sort(function (a, b) {
      return b[sortBy] - a[sortBy];
    });
  }

  // if (sortBy === "difficulty") {
  //   if (orderBy === "ascending") {
  //     this.tasks.sort(function (a, b) {
  //       return a.difficulty - b.difficulty;
  //     });
  //   }
  //     if (orderBy === "descending") {
  //       this.tasks.sort(function (a, b) {
  //         return b.difficulty - a.difficulty;
  //       });
  //     }
  //   }
  //   if (sortBy === "urgency") {
  //     if (orderBy === "ascending") {
  //       this.tasks.sort(function (a, b) {
  //         return a.urgency - b.urgency;
  //       });
  //     }
  //     if (orderBy === "descending") {
  //       this.tasks.sort(function (a,b) {
  //         return b.urgency - a.urgency;
  //       });
  //     }
  //   }
  //   if (sortBy === "reward") {
  //     if (orderBy === "ascending") {
  //       this.tasks.sort(function (a, b) {
  //         return a.reward - b.reward;
  //       });
  //     }
  //     if (orderBy === "descending") {
  //       this.tasks.sort(function (a,b) {
  //         return b.reward - a.reward;
  //       });
  //     }
  //   }
}

Hero.prototype.viewCompleteTasks = function () {
  return this.tasks.filter(function (task) {
    return task.completed;
  })
};

Hero.prototype.viewIncompleteTasks = function () {
  return this.tasks.filter(function (task) {
    return !task.completed;
  })
};

module.exports = Hero;
