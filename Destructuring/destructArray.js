// create array of companies
const companies = [
  'Google',
  'Facebook',
  'Amazon',
  'Uber'
];

// create variables for different companies and an array of companies
const [firstCompany, secondCompany, ...rest] = companies;

// console log the companies
console.log(`companies are ${companies}`);
console.log(`first company is ${firstCompany}`);
console.log(`second company is ${secondCompany}`);
console.log(`the rest of the companies are ${rest}`);