import { getPermit, listAllPermits, submitPermit, updatePermit, deletePermit } from '../controllers/permitController.js'

const routerController = (app) => {
    app.route('/permits')
        .get(listAllPermits)
        .post(submitPermit);

    app.route('/permits/:permitId')
        .get(getPermit)
        .put(updatePermit)
        .delete(deletePermit);
}

export default routerController