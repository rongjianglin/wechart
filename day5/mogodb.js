var mogodb = require('mongodb')
var mondoCt= require("wechart")
mondoCt.connect("mongodb://127.0.0.1:27017",function(err,client){
    var db=client.db('wechart')
    var user = db.collection('friend')
    

})