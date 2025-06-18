const mongoose = require('mongoose');
mongoose.pluralize(null)

const loanApplicationSchema = new mongoose.Schema({
  loanAmount: { type: String },
  zipCode: { type: String },
  purpose: { type: String},
  creditScore: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  birthday: { type: String },
  ssnLast4: { type: String },
  email: { type: String },
  phone: { type: String },
  streetAddress: { type: String },
  state: { type: String },
  addressLength: { type: String },
  homeOwnership: { type: String },
  idLicense: { type: String },
  licenseState: { type: String },
  contactTime: { type: String },
  carOwnership: { type: String },
  workPhone: { type: String },
  incomeSource: { type: String },
  jobTitle: { type: String },
  employerName: { type: String },
  employmentTime: { type: String },
  payFrequency: { type: String },
  nextPayDate: { type: String },
  activeMilitary: { type: String },
  monthlyIncome: { type: String },
  directDeposit: { type: String },
  abaRouting: { type: String },
  accountNumber: { type: String },
  accountType: { type: String },
  monthsAtBank: { type: String },
  bankName: { type: String },
  ssnFull: { type: String },
  ipAddress: { type: String },
  userAgent: { type: String },
  affid: { type: String },
  rid: { type: String },
  tid: { type: String },
  url: { type: String },
  start: { type: String },
  min: { type: String },
  createdAt: { type: Date, default: Date.now }
});


var LoanApplication = mongoose.model('LoanApplications', loanApplicationSchema);
module.exports = LoanApplication
