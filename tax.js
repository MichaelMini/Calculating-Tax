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

function branchTax(thisBranch, salesTaxRates) {
    var areaRate = salesTaxRates[thisBranch.province];
    var areaTaxTotal = addSales(thisBranch) * areaRate;
    return areaTaxTotal;
}

function addSales(eachBranch) {
  var total=0;
  for( var i = 0; i < eachBranch.sales.length; i++) {
    total += eachBranch.sales[i];
  }
  return total;
}

function calculateSalesTax(companySalesData, salesTaxRates) {
  var answer = {};
  for ( var i = 0; i < companySalesData.length; i++) {
    var thisBranch = companySalesData[i];
    var branchTotalSales = addSales(thisBranch);
    var branchTotalTaxes = branchTax(thisBranch, salesTaxRates);//doTaxes();
    if (!answer[thisBranch.name]) {
      answer[thisBranch.name] = {
        totalSales: branchTotalSales,
        totalTaxes: branchTotalTaxes
      }
    } else {
      answer[thisBranch.name].totalSales += branchTotalSales;
      answer[thisBranch.name].totalTaxes += branchTotalTaxes;
    }
  }
  return answer;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

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