var containerEle = document.body.querySelector(".container");

var bill = Number(prompt("What is the total bill?"));
var percentage = Number(prompt("What is the tip percentage?"));

var taxes = bill * 0.07;

var taxed = taxes + bill;

var add = taxed * percentage * 0.01;

var total = add + bill;

sum = Math.ceil(total);

containerEle.innerHTML = "The total is " + total + "";