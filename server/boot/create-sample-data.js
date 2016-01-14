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
        {
          id: 1,
          company: 'scanvest',
          role: 'Developer',
          description: 'first job',
          start: new Date(1995, 10, 17),
          end: new Date(1995, 12, 17)
        },
        {
          id: 2,
          role: 'Project Manager',
          company: 'IK',
          description: 'Second job',
          start: new Date(1997, 0, 17),
          end: new Date(1999, 7, 17)
        }
      ], cb);
    });
  }
};
