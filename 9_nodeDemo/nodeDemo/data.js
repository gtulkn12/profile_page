const stocks = [
  { name: "azn", price: 2000 },
  { google: "abc", price: 3000 },
];

const investments = [2000, 3000, 4000, 50000];

//export investments
// module.exports.investments = investments
// module.exports.stocks = investments

// module.exports = {
//         investments : investments,
//         stocks : stocks
// }

module.exports = {
  investments,
  stocks,
};

console.log(module);
