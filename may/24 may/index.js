const cakes = (recipe, available) => {
  let count = 0;

  //loop through till ingredients run out
  while (true) {
    for (let ingredient in recipe) {
      //if there is no recipe ingredients in available return count
      if (!available[ingredient]) return count;

      //ran out of available ingredients
      if (available[ingredient] - recipe[ingredient] < 0) {
        return count
      } else {
        available[ingredient] -= recipe[ingredient]
      }
    }
    count++;
  }

}