var app = require('../index');
var db = app.get('db');

module.exports = {
  getJobByInvoice: function(req, res, next) {
    db.get_job_by_invoice(req.params.invoice, function(err, job) {
      console.log(err);
      res.set(200).json(job);
    });
  },
  getAllCustomers: function(req, res, next) {
    db.get_all_customers(function(err, response) {
      console.log(err);
      res.set(200).json(response);
    });
  },
  getAllAppointments: function(req, res, next) {
    db.get_all_appointments(function(err, response) {
      console.log(err);
      res.set(200).json(response);
    });
  }
};
