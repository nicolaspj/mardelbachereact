const mongoose = require ('mongoose')

const SignUpTemplate = new mongoose.Schema({
     name :{
                    type: String,
                    require: true
     },
     usernamename :{
               type: String,
               require: true
     },
     emailname :{
               type: String,
               require: true
     },
     passwordname :{
               type: String,
               require: true
    },
    date :{
               type: Date,
               default: Date.now
     }

})

modelu.exports = mongoose.model('mytable', SignUpTemplate)