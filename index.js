const express = require('express');
const port =  process.env.PORT || 8080;
const app = express();

app.get('/',(req,res) => {
            res.status(200).send('Hello World')
        });

app.listen(port , function(error){
    if (error) {
        console.log('something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port )    
    }
})