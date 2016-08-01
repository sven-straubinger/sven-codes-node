var auth = require('basic-auth');

var admins = {
  'straubinger.es@googlemail.com': { password: 'itsAsecret' },
};

module.exports = function(req, res, next) {
  var user = auth(req);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="sven.codes"');
    return res.status(401).send();
  }
  return next();
};
