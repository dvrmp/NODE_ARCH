import express from 'express';
import { router } from '../routes';

const expressApplication = express();

expressApplication.use('/', router);

export  { expressApplication }
