import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Em aplicações reais essas rotas não deveriam existir;
// router.get('/', UserController.index);
// router.post('/', UserController.store);

router.get('/', UserController.show);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
