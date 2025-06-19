const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
         await mongoose.connect('mongodb://127.0.0.1:27017/Loandata', {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        console.log("Connection succeeded");
    } catch (err) {
        console.log("Connection failed: " + err);  // Added colon for clarity
    }
}

connectToDatabase();

// 'mongodb+srv://aliahmadtech7:clFEEa5dFaqcy8WL@cluster0.pxqa89j.mongodb.net/Loandata?retryWrites=true&w=majority'