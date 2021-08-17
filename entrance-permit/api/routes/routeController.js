'use strict';

module.exports = function(app) {
    var permitController = require('../controllers/permitController');

    app.route('/permits')
        .get(permitController.list_all_permits)
        .post(permitController.submit_permit);

    app.route('/permits/:permitId')
        .get(permitController.get_permit)
        .put(permitController.update_permit)
        .delete(permitController.delete_permit);
}
