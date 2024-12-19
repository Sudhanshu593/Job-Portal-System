import express from 'express'
import path from 'path'
import ejsLayouts from 'express-ejs-layouts'
import JobsController from './controllers/jobs.controller.js';
import session from 'express-session';
import { auth } from './middlewares/auth.middleware.js';
import { uploadFile } from './middlewares/fileUpload.middleware.js';
const server = express();

server.use(express.static('public'));
server.use(ejsLayouts)
server.use(express.json())
server.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    }))
server.use(express.urlencoded({extended:false}))

server.set('view engine','ejs');

server.set('views', path.join(path.resolve(),'views'));

let jobController = new JobsController;

server.get('/', jobController.landingPage)
server.post('/register',jobController.postRec)

server.get('/login',jobController.login)
server.post('/login',jobController.loginChecker)
server.get('/jobs',jobController.jobListing)

server.get('/job/:id',jobController.jobDesc)
server.post('/apply/:id',uploadFile.single('resume'),jobController.applyJob)

server.get('/job/update/:id',auth,jobController.jobUpdate)
server.post('/job/update/:id',jobController.postJobUpdate)

server.get('/postjob',auth,jobController.getNewJob)
server.post('/job',jobController.postNewJob)

server.get('/job/delete/:id',auth,jobController.deleteJob);
server.get('/logout', jobController.logout);

server.get('/job/applicants/:id',jobController.getApplicantsList)

export default server;