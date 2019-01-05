import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import issue from './models/issue';


const app=express();
const router=express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('');

mongoose.connect('mongodb://localhost:27017/issues');
const connection=mongoose.connection;

connection.once('open',()=>{console.log("Mongo database connection establish")});

router.route('/issues').get((req,res)=>{
issue.find((err,issues)=>{
    if(err)
        console.log(err);
    else
    res.json(issues);

});
});
router.route('/issues/:id').get((req,res)=>{
    issue.findById(req.params.id,(err,issues)=>{
        if(err)
        console.log(err);
    else
    res.json(issues);
    });
});
router.route('/issues/add').post((req,res)=>{
let issues=new issue(req.body);
issues.save()
.then(issue=>{
    res.status(200).json({'issue':'issue added sucessfully'});
})
.catch(err=>{
    res.status(400).send('Failed');
});
});

router.route('/issues/update/:id').post((req,res)=>{
issue.findById(req.params.id,(err,issue)=>{
    if(!issue)
    return next(new Error("Could not load document"));
    else{
        issue.title=req.body.title;
        issue.description=req.body.description;
        issue.responnsible=req.body.responnsible;
        issue.severity=req.body.severity;
        issue.status=req.body.status;
        issue.save().then(issue=>{
            res.json('updated')
        }).catch(err=>{
            res.status(400).send('updated failed');
        });
    }

});
});
router.route('/issues/delete/:id').post((req,res)=>{
issue.findByIdAndRemove({_id:req.params.id},(err,issue)=>{
    if(err)
    res.json(err);
    else
    res.json('Remove succcessfully');
})
});
app.use('/',router);

app.listen(4000,()=>console.log('express running on port 4000'));
