var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
     console.log('进来register路由的/里面了')
  
      res.render("register")
       
        
    
    });
    router.post("/in", function (req, res, next) {
        console.log("进入register3 的in 处理");
      
        let obj = req.body;
        console.log(obj);
        console.log(obj.username);
        console.log(obj.password);
      
 user.findOne({username:obj.username},(err,data)=>{
    if(err){
        //发送错误日志 可以写进数据库
        console.log(err)
    }
    if(data) {
        res.redirect('/register')
    }else {
        user.insertMany(obj,(err,data)=>{
            if(err) {
                console.log(err)
            } 
            console.log(data)
            res.redirect('/login')
        })
    }
})
       

})

         
         
     



    module.exports=router;