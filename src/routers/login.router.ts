import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValidation from '../middlewares/loginValidation';

const router = Router();
const loginController = new LoginController();

router.post('/', loginValidation, loginController.enterLogin);

export default router;