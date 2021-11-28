const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('hbs',exphbs({
    defaultLayout: 'main',
    extanme:'.hbs'
}));

// template Engine 
app.set('view engine', 'hbs');

//routes 
app.get('/',(req,res)=> {
    res.render('home');
});

app.get('/about-us',(req,res) => {
    res.render('about-us');
});

app.listen(3001,() =>{
    console.log('The web server has started on port 3001');
});

module.exports = router; 


