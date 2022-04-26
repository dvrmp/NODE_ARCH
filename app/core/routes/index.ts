import { Router } from 'express';
import authenticationRouter from '../../modules/authentication/routes/authentication.routes';

const router: Router = Router();

router.use(authenticationRouter);
export { router }