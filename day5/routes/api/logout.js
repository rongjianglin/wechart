let express = require('express')
let router = express.Router()

router.delete("/",function(req,res,next){
    req.session["login"]  = undefined
    res.send({err:0,data:'注销成功'})
  

})

module.exports=router;