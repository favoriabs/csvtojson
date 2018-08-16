const csvPath='customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs');

csv()
.fromFile(csvPath)
.then((json)=>{
    console.log(json);
})

const jsonArray=csv().fromFile(csvPath);

//
// var contents = fs.readFileSync('customer-data.csv', 'utf8');
// console.log(contents);
