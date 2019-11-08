var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession = require("cookie-session")
var multer =require("multer")

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
//配置文件上传
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'))
    }else if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'))
    }else{
      cb(null, path.join(__dirname, 'public/upload/product'))
    }
  }
})

let multerObj = multer({storage});
// let multerObj = multer({dest:'./public/upload'}); //存储方式dest指定死了，storage分目录
app.use(multerObj.any())
//配置cookie
let arr=[];
for(var i=0;i<1000;i++){
  arr.push('alex_'+Math.random())
}
app.use(cookieSession({
  name:'alex_id',
  keys:arr,
  maxAge:1000*60*60*24*15
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public','qian')));
app.use("admin",express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname,'public')))

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//接口响应


//用户端
app.all('/api/*',require('./routes/api/globalParams'))
app.use('/api/home',require('./routes/api/home'))
app.use('/api/banner',require('./routes/api/banner'))
app.use('/api/follow',require('./routes/api/follow'))
app.use('/api/column',require('./routes/api/column'))
app.use('/api/user',require('./routes/api/user'))
app.use('/api/login',require('./routes/api/login'))
app.use('/api/reg',require('./routes/api/reg'))
app.use('/api/logout',require('./routes/api/logout'))
app.use('/api/friend',require('./routes/api/friend'))
//管理端
app.get("/admin/a",function(req,res,next){
    res.render("index.ejs",{title:"你好"})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
 if(req.url.indexOf("/admin") !== -1){
  res.render('error');
 }
 else{
   res.send("err:1,data:'路径错误'")
 }
});

module.exports = app;
