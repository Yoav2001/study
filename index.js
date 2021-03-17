//all these metdos cam responds to HTTP verb or HTTP method
/*
app.get()
app.post()
app.put()
app.delete()


I install nodemon-'npm i -g nodemon'
זה גורם שיכול לרענן את הדף אחרי שעשיתי שינוי בקוד במקום להריץ בטרמינל
*/
const express= require('express');
const app =express();

app.get('/',(req,res) =>{
res.send('hello world');


});


app.get('/api/courses',(req,res) =>{//rout fotr getting list of courses

res.send([1,2,3]);

});

//get a single course
app.get('/api/courses/:courseId ',(req,res) =>{
res.send(req.params.courseId  );
res.send(req.params.courseId  );
});

app.get('/api/posts/:year/:month',(req,res) =>{
    res.send(req.params);//יחזיר שנה וחודש

    });



//port-is a type of "environment variale "
/*app.listen(3000 , () => console.log('listning on port 3000'));*/


const port=process.env.PORT|| 3000;//הערך של פורט,אם אין בו ערך תיתן בררית מחדל 3000
app.listen(port , () => console.log( `listning on port ${port}...`));//CHANGE ' TO BACKTIP ON KYEBORD

//how we set an enviroment varibale ?
//on terminal -set PORT=5000