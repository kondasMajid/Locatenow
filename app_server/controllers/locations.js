// get home page

module.exports.homelist = function(req, res) {
    res.render("locations-list", { title: "Home" });
};

// get location info page

module.exports.locationInfo = function(req, res) {
    res.render("location-info", { title: "Locaton Info" });
};

// const locationInfo = (req, res) => {
//     res.render("location-info", { title: "Location info" });
// };
// module.exports.locationInfo;
// get Review page

module.exports.addReview = function(req, res) {
    res.render("location-review-form", { title: " Add Review " });
};

// get about page
// module.exports.

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