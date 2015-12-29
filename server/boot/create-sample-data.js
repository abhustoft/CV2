var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDS = app.dataSources.mongoDS;
  //var mysqlDs = app.dataSources.mysqlDs;

  //create all models
  async.parallel({
    jobExperiences: async.apply(createJobExperiences),
    //coffeeShops: async.apply(createCoffeeShops),
  }, function(err, results) {
    if (err) throw err;
    createJobExperiences(function(err) {
      console.log('> models created sucessfully');
    });
  });

  //create reviewers
  function createJobExperiences(cb) {
    mongoDS.automigrate('JobExperience', function(err) {
      if (err) return cb(err);
      var JobExperience = app.models.JobExperience;
      JobExperience.create([
        {title: 'siving',company: 'scanvest',description: 'first job'},
        {title: 'Software developer',company: 'IK',description: 'Second job'}
      ], cb);
    });
  }
};
