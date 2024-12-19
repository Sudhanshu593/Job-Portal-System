import { recruiters } from "../models/recruiter.model.js";


export const auth = (req, res, next) => {
    if (req.session.userEmail ) {
    next();
    } else {
    res.redirect('/error404');
    }
    };