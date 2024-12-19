import RecruiterModel from "../models/recruiter.model.js";
import JobModel from "../models/jobs.model.js";
import ApplicantModel from "../models/applicants.model.js";



export default class JobsController{

    landingPage(req,res){

        res.render('landing.ejs')
    }

    postRec(req,res){
        const {name,email,password} = req.body;
        RecruiterModel.addRec(name,email,password);
       
        res.render('login')
    }

    jobListing(req,res){
        const search = req.query.search
        const jobs = JobModel.getJobs(search);
        
        res.render('job-listing', {jobs})
    }

    jobDesc(req,res){
        let {id} = req.params;
        let job = JobModel.getJobByID(id);
        
        if(job){
            res.render('job-details',{job:job})
        }
        else{
            res.status(404).render('error404');
        }
        
    }

    login(req,res){
        res.render('login',{errorMessage:null})
    }

    loginChecker(req,res){
        const {email,password} = req.body;
       const user = RecruiterModel.isValidLogin(email,password);
        let errorMessage = 'invalid login credentials';
       if(!user){
       return res.render('login',{errorMessage: errorMessage})
       }
       req.session.userEmail = email;
       req.session.userName = user;
       const jobs = JobModel.getJobs();
       res.render('job-listing',{jobs:jobs})
    }

    logout(req, res) {
        // on logout, destroy the session
        req.session.destroy((err) => {
        if (err) {
        console.log(err);
        } else {
        res.redirect('/login');
        }
    })
    }

    jobUpdate(req,res){
        let {id} = req.params;
        console.log(id);
        let job = JobModel.getJobByID(id);
        console.log(job);
        if(job){
            res.render('update-job.ejs',{job:job})
        }
        else{
            res.status(404).render('error404');
        }
    }
    postJobUpdate(req,res){
        let {id} = req.params;
        
        const {
            job_category,
            job_location,
            job_designation,
            company_name,
            salary,
            number_of_openings,
            skills_required,
            apply_by
          } = req.body;
          
        JobModel.replaceJobData(id, job_category,
            job_location,
            job_designation,
            company_name,
            salary,
            number_of_openings,
            skills_required,
            apply_by)
            const jobs = JobModel.getJobs();
            res.render('job-listing', {jobs:jobs})
    }

    getNewJob(req,res){
        res.render('new-job');
    }

    postNewJob(req,res){
        const {job_category,
            job_location,
            job_designation,
            company_name,
            salary,
            number_of_openings,
            skills_required,
            apply_by } = req.body;
        JobModel.addNewJob(job_category,
            job_location,
            job_designation,
            company_name,
            salary,
            number_of_openings,
            skills_required,
            apply_by)
            const jobs = JobModel.getJobs();
            res.render('job-listing',{jobs:jobs})
    }

    deleteJob(req,res){
        
        let {id} = req.params;
    console.log(id);
    console.log(JobModel.getJobByID(id));
        JobModel.delete(id);

        const jobs = JobModel.getJobs();
            res.render('job-listing',{jobs:jobs})
         
    }

    applyJob(req,res){
        const {name,email,contact}= req.body
        const jobId = req.params
        const resumeUrl = '/Resumes'+ req.file.filename

        ApplicantModel.addApplicant(jobId,name,email,contact,resumeUrl)
    }

    getApplicantsList(req,res){
        const applicants = ApplicantModel.getApplicants(req.params)
        res.render('applicants',{applicants:applicants})
    }
}