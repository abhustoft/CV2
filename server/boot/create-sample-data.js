var async = require('async');
module.exports = function(app) {
  //data sources
  var mongoDS = app.dataSources.mongoDS;
  //var mysqlDs = app.dataSources.mysqlDs;

  //create all models
  async.parallel({
    workExperiences: async.apply(createWorkExperiences),
    //coffeeShops: async.apply(createCoffeeShops),
  }, function(err, results) {
    if (err) throw err;
    createWorkExperiences(function(err) {
      console.log('> models created sucessfully');
    });
  });

  //create reviewers
  function createWorkExperiences(cb) {
    mongoDS.automigrate('WorkExperience', function(err) {
      if (err) return cb(err);
      var WorkExperience = app.models.WorkExperience;

      WorkExperience.create([
        {
          id: 1,
          company: 'scanvest',
          companyDescription: 'scanvest makes interkom',
          role: 'Developer',
          roleDescription: 'I made stuff',
          start: new Date(1995, 10, 17),
          end: new Date(1995, 12, 17)
        },
        {
          id: 2,
          company: 'IK',
          companyDescription: 'SA place in Asker',
          role: 'Project Manager',
          roleDescription: 'watched stuff being made',
          start: new Date(1997, 0, 17),
          end: new Date(1999, 7, 17)
        }
      ], cb);
    });
  }
};
