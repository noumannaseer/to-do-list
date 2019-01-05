import mongoose from 'mongoose';
const Schema=mongoose.Schema;
let issue=new Schema({
    title:{
        type:String
    },
    responnsible:{
        type:String
    },
    description:{
        type:String
    },
    severity:{
        type:String
    },
    status:{
        type:String,
        default:'Open'
    }
});
export default mongoose.model('issue',issue);