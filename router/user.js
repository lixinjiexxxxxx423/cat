const express = require('express');
var router = express.Router();
const pool = require('../mysql.js');
router.post('/login',(req,res)=>{
    var uid=req.body.uname;
    pool.query('select * from book_user where u_telep=?',[uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send('2');
        }else{
            res.send('0');
        }
    })
});
router.post('/userlogin',(req,res)=>{
    var utele = req.body.uname;
    var upwd =req.body.upwd;
    pool.query('select * from book_user where u_telep=? and u_pwd=?',[utele,upwd],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.send('1');
            }else{
                res.send('0');
            }
        }
    )
});
router.post('/reg',(req,res)=>{
    console.log(req.body);
    pool.query('insert into book_user set ?' ,[req.body],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('1');
        }else{
            res.send('2');
        }
    })

})
module.exports=router;