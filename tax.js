var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var eachComp = {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  };


function addSales(eachComp) {
  // var sales = [1,2,3,4];
  var total=0;
  // console.log(eachComp.sales.length);
  for( var i = 0; i < eachComp.sales.length; i++) {
    total += eachComp.sales[i];
    // console.log(total);
  }
  return total;
}

console.log(addSales(eachComp));


// function findComp(companySalesData) {
//   for ( var i = 0; i < companySalesData.lenght; i++) {

// }


//   companySalesData.sales[i]
// }

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/