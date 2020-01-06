// get home page 

module.exports.homelist = function(reg, res){
    res.render('locations-list', {title: 'Home'})
}
  
// get location info page 

module.exports.locationInfo = function(reg, res){
    res.render('location-info', {title: 'Locaton Info'})
}


// get Review page 

module.exports.addReview = function(reg, res){
    res.render('location-review-form', {title: ' Add Review '});
}





// /* GET 'home' page */

// module.exports.homelist = function(req, res){

//     res.render('locations-list', { title: 'Home' });
  
//   };
  
  
  
//   /* GET 'Location info' page */
  
//   module.exports.locationInfo = function(req, res){
  
//     res.render('location-info', { title: 'Location info' });
  
//   };
  
  
  
//   /* GET 'Add review' page */
  
//   module.exports.addReview = function(req, res){
  
//     res.render('location-review-form', { title: 'Add review' });
  
//   };