const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://aarya191102:Aarya123@courtlyquarters.tlsmspx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connected to mongoDB"))
.catch((e)=>console.log(e))