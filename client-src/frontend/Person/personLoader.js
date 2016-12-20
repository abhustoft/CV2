const { Promise } = global;

export default () => {
  return new Promise(resolve => {
    require.ensure([], () => {
      resolve({
        myPerson: require('person.js')
      });
    });
  });
};
