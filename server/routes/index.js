
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Puppycopter, the puppies that care' });
};
