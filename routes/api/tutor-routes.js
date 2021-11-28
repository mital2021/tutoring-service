const { Router } = require("express").router;

Router,get('/',(req,res)=> {
    res.render('homepage',{
        id: 1,
        post_url: 'https:',
        title: 'ME Tutoring Services',
        created_at: new Date(),
        vote_count:10,
        user:{
            username:''
        }
    
    });
});