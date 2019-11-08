let express = require('express')
let router = express.Router()
let bcrypt = require('bcrypt');

let mgdb = require('../../utils/mgdb')

router.post("/",function(req,res,next){
  let {username,password} = req.body
  mgdb({
   
    collectionName:'user',
    success:function({collection,client}){
   
      collection.find({username},{}).toArray(function(err,result){
        if(err){
          res.send("数据库错误")
        }
        else{
          console.log(result.length)
          if(result.length>0){
            console.log(result)
           var bl= username== result[0].username
            if(bl){
              //delete result[0].password
               //res.send({data:"登录成功"})
              
               req.session['login']=result[0]._id;
             
               res.send({err:1,data:result})
               
            }
            
          }
          else{
            res.send({err:0,data:"用户名不存在或密码错误"})

          }
          
          client.close()
        }
      })
        
    },
    error:(err)=>{console.log('err',err)},
  })

  
})




// router.get('/',(req,res,next)=>{
//   console.log('login')
//   let {username,password} = req.body

//   mgdb({
//     collectionName: 'user',
//     success: ({ collection, client }) => {
//       collection.find({
//         username
//       }, {
//       }).toArray((err, result) => {
//         if (err) {
//           res.send({ err: 1, msg: 'home集合操作错误' })
//         } else {
//           if(result.length>0){
//             let bl = bcrypt.compareSync(password, result[0].password); // true|false
//             if(bl){
//               delete result[0].username
//               delete result[0].password

//               //种cookie,留session
//               req.session['1909_newsapp']=result[0]._id

//               res.send({ err: 0, msg: '登录成功', data: result[0]})
//             }else{
//               res.send({ err: 1, msg: '用户名不存在或者密码有误' })
//             }
//           }else{
//             res.send({ err: 1, msg: '用户名不存在或者密码有误' })
//           }
          
//         }
//         client.close()
//       })
//     }
//   })

// });

module.exports=router;