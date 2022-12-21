import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import express, {Application, Request, Response, NextFunction} from 'express';

const server: Application = express();

(() => {
  const result = dotenv.config({ path: path.join(__dirname, "..", "config", ".env") });
  if (result.parsed == undefined) throw new Error("Cannot loaded environment variables file.");  
})();

server.set('port', process.env.APP_PORT || 8001);
server.use(morgan('dev'));
server.use('/', express.static(path.join(__dirname, '..', 'zmoda')));
server.use(express.json());
server.use(express.urlencoded({extended: false}));

import router from './routers'; server.use('/', router);

server.use((req: Request, res: Response, next) => {
  console.log(`${req.method} ${req.url} 라우터가 없습니다.`)
  // res.status(404);
	// if(req.accepts('html')) {
	// 	res.sendFile(path.join(__dirname, 'page', '404.html'))
	// } else if(req.accepts('json')) {
	// 	res.json({ error: "404 Not Found" });
	// } else {
	// 	res.type('txt').send("404 Not Found")
	// }
  // const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  // error.status = 404;
  // next(error);
})

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
};
server.use(errorHandler);

export default server;