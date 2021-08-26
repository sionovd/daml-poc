const wrapAsync = (fn) => {
    return (req, res, next) => {            
        fn(req, res).catch(next);
    }
}

module.exports = function(app) {
    const permitController = require('../controllers/permitController');
    const passageController = require('../controllers/passageController');

        app.route('/passages/:citizenId')
            .get(wrapAsync(passageController.getPassages))
            .post(wrapAsync(passageController.createPassage))

        app.route('/permits/:citizenId')
            .get(wrapAsync(permitController.getPermits))
            .post(wrapAsync(permitController.createPermit))
}
