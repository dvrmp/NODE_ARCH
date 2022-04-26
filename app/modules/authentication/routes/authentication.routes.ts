import { CONTROLLER_ENUMS } from "../../../core/enums/controllers.enum";
import { MIDDLEWARE_ENUM } from "../../../core/enums/middlewares.enum";
import { MODULES_ENUM } from "../../../core/enums/modules.enum";
import { Route } from "../../../core/routes/models/route.class";
import { Request, Response, Router } from 'express';
import { AuthenticationController } from "../controllers/authenticationController";
import { dependeciesContainer } from "../../../core/container";
import { ErrorMesssage } from "../../../api/messages/ErrorMessage";

const LOGIN: Route = new Route('POST', '/authentication/login', MODULES_ENUM.AUTHENTICATION, CONTROLLER_ENUMS.AUTHENTICATION.LOGIN, MIDDLEWARE_ENUM.GUEST);
const REGISTER: Route = new Route('POST', '/authentication/register', MODULES_ENUM.AUTHENTICATION, CONTROLLER_ENUMS.AUTHENTICATION.REGISTER, MIDDLEWARE_ENUM.GUEST);

export const AUTHENTICATION_ROUTES = {
    LOGIN,
    REGISTER
}

const authenticationRouter: Router = Router();
const authenticationController: AuthenticationController = dependeciesContainer.resolve<AuthenticationController>(AuthenticationController);


authenticationRouter.post(LOGIN.uri, [], async (request: Request, response: Response) => {
    try {
        authenticationController.setHandlers(request, response);
        await authenticationController.register();
    } catch (error ) {
        const errorMessage = error as ErrorMesssage;
        return response.status(errorMessage.statusCode).json({error: errorMessage});
    }
})

export default authenticationRouter;