let express = require('express')
let router = express.Router()

let mgdb = require('../../utils/mgdb')
router.get("/",function(req,res,next){   //列表与详情
  var _id = req.query._id
  console.log(_id)
  if(_id){
    list(req,res,next,req.params.id)
  }
  else{
   
    var {_page,_limit,q,_sort} = req.query
    q = q ? {title:q}  : {}
    
    mgdb({
      collectionName:"list",
      success:function({collection,client}){
        collection.find(q,{skip:_page * _limit,limit:_limit, sort: { [_sort]: -1 }}).
        toArray(function(err,result){
          
          if(err){
            res.send({e:0,data:"数据查找错误"})
          }
          else{
            if(result){
              
              res.send({err:1,msg:result})
            }
            else{
              res.send({data:"数据为空"})
            }
          }
        })

      }
    })
  }

})
router.get("/:id",function(req,res,next){            //详情
  list(req,res,next,req.params.id)
})

var list = function(req,res,next,_id){
  mgdb({
    collectionName:"list",
    success:function({collection,client,ObjectID}){
      collection.find({_id : ObjectID(_id)},{}).
      toArray(function(err,result){
          
        
        if(err){
          res.send({e:0,data:"数据查找错误"})
        }
        else{
          if(result){
            
            res.send({err:1,msg:result})
          }
          else{
            res.send({data:"数据为空"})
          }
        }
      })

    }
  })


}

// router.get('/', (req, res, next) => {

//   //拿到携带参数
//   let _id = req.query._id;
//   if (_id) {
//     // console.log(2,_id)
//     getDetail(req, res, next, _id)
//   } else {
//     console.log('列表')
//     let { _page, _limit, _sort, q } = req.query

//     q = q ? { title: eval('/' + q + '/') } : {}

//     //兜库
//     mgdb({
//       collectionName: 'home',
//       success: ({ collection, client }) => {
//         collection.find(q, {
//           limit: _limit,
//           skip: _page * _limit,
//           sort: { [_sort]: -1 }
//         }).toArray((err, result) => {
//           // console.log('err',err)
//           // console.log('result',result)
//           if (err) {
//             res.send({ err: 1, msg: 'home集合操作错误' })
//           } else {
//             res.send({ err: 0, data: result })
//           }
//         })
//       }
//     })

//   }

//   //返回值 浏览器
// });

// router.get('/:id', (req, res, next) => {
//   // console.log(1,req.params.id)
//   getDetail(req, res, next, req.params.id)
//   //拿到携带参数
//   //兜库
//   //返回值 浏览器
// });

// let getDetail = (req, res, next, _id) => {
//   mgdb({
//     collectionName: 'home',
//     success: ({ collection, client, ObjectID }) => {
//       collection.find({
//         _id: ObjectID(_id)
//       }, {
//         }).toArray((err, result) => {
//           if (err) {
//             res.send({ err: 1, msg: 'home集合操作错误' })
//           } else {
//             if(result.length>0){
//               res.send({ err: 0, data: result[0]})
//             }else{
//               res.send({ err: 1, msg: '错误的id或者数据不存在' })
//             }
            
//           }
//         })
//     }
//   })
// }

module.exports = router;