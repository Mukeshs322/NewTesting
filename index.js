var express = require('express');
var router = express.Router();
var ejs = require('ejs');

var sql = require("mssql");
var dbConfig = require('../Database/dbConnection');
var dbConfig1 = require('../Database/dbConnection1');

router.get('/',function(req,res){
  res.render('index1');
  })

 

/*router.post('/getrates', function (req, res) {
  sql.connect(dbConfig.dbConnection()).then(() => {
      return sql.query("select b.productid as 'productname',b.producttypeid as 'producttypeid',a.buyrate as 'buyrate',a.sellrate as 'sellrate',convert(varchar,getdate(),106) as 'entereddate' from siteproductrates a inner join countryproducts b on a.productid=b.countryproductid where a.entereddate=convert(varchar,getdate(),106) and b.producttypeid='FC' order by a.productid;");
  }).then(result => {
      console.log(result)
      var columns = {prductname:'productname',producttypeid:'producttypeid',buyrate:'buyrate',sellrate:'sellrate',entereddate:'entereddate'}
      res.render('index2', { data: result.recordset }) //res.render() pass a local variable to the view
  }).catch(err => {
      console.log(err)
  })
});
*/



router.post('/getrates', function (req, res) {

  //let region=req.body.region;
  //console.log(region)

 

    
//var data=fs.readFileSync('../config.json');
//var js=require('../Database/config.json');

  var abc=req.body.config;

  console.log(abc);

  if ('EMEA'==abc)
  {
  
  sql.connect(dbConfig.dbConnection()).then(() => {

    let date= req.body.Txtdate;
    let Database=req.body.Database;

    console.log("select b.productid as 'productname',b.producttypeid as 'producttypeid',a.buyrate as 'buyrate',a.sellrate as 'sellrate', convert(varchar,'" + date + "',106) as 'entereddate' from "+Database+"..siteproductrates a inner join "+Database+"..countryproducts b on a.productid=b.countryproductid where a.entereddate=convert(varchar, '" + date + "',101) and b.producttypeid='FC' order by a.productid")
     
      return sql.query("select b.productid as 'productname',b.producttypeid as 'producttypeid',a.buyrate as 'buyrate',a.sellrate as 'sellrate',convert(varchar,'" + date + "',106) as 'entereddate' from "+Database+"..siteproductrates a inner join "+Database+"..countryproducts b on a.productid=b.countryproductid where a.entereddate=convert(varchar, '" + date + "',101) and b.producttypeid='FC' order by a.productid;");
   }).then(result => {
     
      var columns = {prductname:'productname',producttypeid:'producttypeid',buyrate:'buyrate',sellrate:'sellrate',entereddate:'entereddate'}
      res.render('index2', { data: result.recordset }) //res.render() pass a local variable to the view
  }).catch(err => {
      console.log(err)
  })
}


if ('TAS'==abc)
{

sql.connect(dbConfig1.dbConnection1()).then(() => {

  let date= req.body.Txtdate;
  let Database=req.body.Database;

  console.log("select b.productid as 'productname',b.producttypeid as 'producttypeid',a.buyrate as 'buyrate',a.sellrate as 'sellrate', convert(varchar,'" + date + "',106) as 'entereddate' from "+Database+"..siteproductrates a inner join "+Database+"..countryproducts b on a.productid=b.countryproductid where a.entereddate=convert(varchar, '" + date + "',101) and b.producttypeid='FC' order by a.productid")
   
    return sql.query("select b.productid as 'productname',b.producttypeid as 'producttypeid',a.buyrate as 'buyrate',a.sellrate as 'sellrate',convert(varchar,'" + date + "',106) as 'entereddate' from "+Database+"..siteproductrates a inner join "+Database+"..countryproducts b on a.productid=b.countryproductid where a.entereddate=convert(varchar, '" + date + "',101) and b.producttypeid='FC' order by a.productid;");
 }).then(result => {
   
    var columns = {prductname:'productname',producttypeid:'producttypeid',buyrate:'buyrate',sellrate:'sellrate',entereddate:'entereddate'}
    res.render('index2', { data: result.recordset }) //res.render() pass a local variable to the view
}).catch(err => {
    console.log(err)
})
}

});









router.post('/getdiff', function (req, res) {
 // let Region=req.body.Region;

 var abc=req.body.config;

  console.log(abc);

  if ('EMEA'==abc)
  {

  sql.connect(dbConfig.dbConnection()).then(() => {

   
    var Database1=req.body.Database1;
    console.log("exec Check_All_FC_Product_Rates_new " + Database1 + "")

    return sql.query("exec Check_All_FC_Product_Rates_new '" + Database1 + "'")
   }).then(result => {
     
      var columns = {productid:'productid',productname:'productname',YesterdayBuyRate:'YesterdayBuyRate',TodayBuyRate:'TodayBuyRate',YesterdaySellRate:'YesterdaySellRate',TodaySellRate:'TodaySellRate',IsDifferent:'IsDifferent',DifferenceMoreThan5:'DifferenceMoreThan5'}
      res.render('index3', { data: result.recordset }) //res.render() pass a local variable to the view
  }).catch(err => {
      console.log(err)
  })
}

if ('TAS'==abc)
{
  sql.connect(dbConfig1.dbConnection1()).then(() => {

   
    var Database1=req.body.Database1;
    console.log("exec Check_All_FC_Product_Rates_new " + Database1 + "")

    return sql.query("exec Check_All_FC_Product_Rates_new '" + Database1 + "'")
   }).then(result => {
     
      var columns = {productid:'productid',productname:'productname',YesterdayBuyRate:'YesterdayBuyRate',TodayBuyRate:'TodayBuyRate',YesterdaySellRate:'YesterdaySellRate',TodaySellRate:'TodaySellRate',IsDifferent:'IsDifferent',DifferenceMoreThan5:'DifferenceMoreThan5'}
      res.render('index3', { data: result.recordset }) //res.render() pass a local variable to the view
  }).catch(err => {
      console.log(err)
  })

}
  
});



/*router.post('/getexport',function(req,res){
  sql.connect(dbConfig.dbConnection()).then(() => {

   
    var Database2=req.body.Database2;
    console.log("exec Check_All_FC_Product_Rates_new " + Database2 + "")

    return sql.query("exec Check_All_FC_Product_Rates_new '" + Database2 + "'")
   }).then(result => {
     
      var columns = {productid:'productid',productname:'productname',YesterdayBuyRate:'YesterdayBuyRate',TodayBuyRate:'TodayBuyRate',YesterdaySellRate:'YesterdaySellRate',TodaySellRate:'TodaySellRate',IsDifferent:'IsDifferent',DifferenceMoreThan5:'DifferenceMoreThan5'}
      res.render('Exportfile', { data: result.recordset }) //res.render() pass a local variable to the view
  }).catch(err => {
      console.log(err)
  })
  })
  */


module.exports = router;