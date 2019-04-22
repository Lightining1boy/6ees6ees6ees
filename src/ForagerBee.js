class ForagerBee extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
// a canFly property that is set true
// a treasureChest property that is set to an empty array []
// a forage method that allows the bee to add a treasure to the treasureChest