module.exports = function(ProfileText) {
  ProfileText.validatesUniquenessOf('Sequence', {message: 'Sequence number not unique'});
};
