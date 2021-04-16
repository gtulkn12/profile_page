function Country(name, capital, snows, population) {
  this.name = name;
  this.capital = capital;
  this.snows = snows;
  this.population = population;
}

var unitedStates = new Country("United States", "Washington DC", true, 500000);
console.log(unitedStates);
console.log(unitedStates.name);
