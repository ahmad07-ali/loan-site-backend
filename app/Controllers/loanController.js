const LoanApplication = require('../Models/loanApplication');

module.exports = { 

createLoanApplication:function(req, res) {
  console.log("Incoming data:", req.body);
  LoanApplication.create(req.body).then(save=>{
      res.json('your data has been saved in to database')
  }).catch(err=>{
    console.log(err)
      res.json("!!!! Ooooops something went wrong")
  }) 
},

// Get all loan applications
getAllLoanApplications:function(req, res) {
  LoanApplication.find(req.body).then(results=>{
      res.json(results)
  }).catch(err=>{
      res.status(500).json( "something went wrong"+ err)
  });
}

};