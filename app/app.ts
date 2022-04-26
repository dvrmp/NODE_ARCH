import 'reflect-metadata';
import commandArgs from 'command-line-args';
import { ServerCore } from './core/server';
import { guiCommands, optionDefinitions } from './core/utils/commands/gui.command';
import { getRoutes } from './core/routes/models/route.class';
import { ConfigurationCore } from './core/config';


console.log(guiCommands);

const optionsCommands = commandArgs(optionDefinitions);

const serverCore: ServerCore = new ServerCore()

if (optionsCommands['start'] && optionsCommands['development']) {
    ConfigurationCore.IS_DEVELOPMENT = true;
    serverCore.initializeAsDevelopment();
}
if (optionsCommands['start'] && optionsCommands['production']) {
    ConfigurationCore.IS_PRODUCTION = true;
    serverCore.initializeAsProduction();
}

if(optionsCommands['route-list']){
    console.table(getRoutes(),["METHOD","URI","MODULE","CONTROLLER","MIDDLEWARE"]);
}
// =======
// import express from 'express';
// import mongoose, { ConnectOptions } from 'mongoose';
// require('dotenv').config({ path: `${__dirname}/../.env.${process.env.NODE_ENV}.local` || `${__dirname}/../.env.${process.env.NODE_ENV}` });

// const app: express.Application = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(process.env.PORT || 3001, () => {
//   console.log(`Tasty backend listening on port ${process.env.PORT}!`);
// });

// const mongooseOptions: ConnectOptions = {};

// const mongoURI = process.env.DB_URI || '';
// mongoose.connect(mongoURI, mongooseOptions, (err) => {
//   if (err) throw err;

//   console.log('DB Connected');
// });
// >>>>>>> develop
