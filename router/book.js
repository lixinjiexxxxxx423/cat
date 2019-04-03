const express = require('express');
var router = express.Router();
const pool = require('../mysql.js');
router.get('/bookMes',(req,res)=>{
    pool.query('SELECT * FROM book_own',(err,result)=>{
        if(err) throw  err;
        res.send(result[0]);
    });
});
router.get('/boodesc',(req,res)=>{
    var booktype=req.query.bookstyle;
     console.log(booktype);
    if(booktype==='1' || booktype=="热卖"){
        pool.query('select * from books' ,(err,result)=>{
            if(err) throw err;
            // console.log(result);
            res.send(result);
        })
    }else{
        pool.query('select * from books  where b_type=?' ,[booktype],(err,result)=>{
            if(err) throw err;
            res.send(result);

        });
    }
})
router.get('/booktype',(req,res)=>{
    pool.query('select DISTINCT b_type from books',(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})
module.exports=router;