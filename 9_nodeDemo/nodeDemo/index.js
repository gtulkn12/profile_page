//const myData = require("./data");
const { investments } = require("./data");
const { PI, STOCK_CONST } = require("./constants");
const { sum } = require("./functions");

//IMPORT THE INVESTMENT DATA

for (let inv of investments) {
  console.log(sum(inv, inv, STOCK_CONST) + PI);
}
