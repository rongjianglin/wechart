let express = require('express')
let router = express.Router()
let bcrypt = require('bcrypt');

let mgdb = require('../../utils/mgdb')

router.get("/",function(req,res,next){

  let username = req.query.username
 

  


  mgdb({
   
    collectionName:'friend',
    success:function({collection,client})
    {
   
      collection.find(username).toArray(function(err,result){
        if(err){
          res.send("数据库错误")
        }
        else{
         

          if(result.length>0){
           
         
           result.forEach((item) => {
               
              if(item.username == username){
                res.send({err:1,data:item})
                console.log(item)
              }
             
              
             
           });
          //  for(var i = 0;i<result.length;i++){
          //     if(result[i] === username){
          //      
               
          //     }
          //     else{
          //    
  
          //     }
          //  }
            
            
          }
          
          client.close()
        }
      })
        
    },
    error:(err)=>{console.log('err',err)},
  })

  
})





module.exports=router;