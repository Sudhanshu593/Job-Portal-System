export default class JobModel{
    constructor(id,name,role,location,ctc,skills,deadline,category,number){
        this.id = id,
        this.name = name,
        this.role = role,
        this.location =location,
        this.ctc = ctc,
        this.skills = skills,
        this.deadline = deadline,
        this.number = number,
        this.category = category
    }

   static getJobs(){
        return jobs;
    }
    static getJobByID(id){
        return jobs.find(job => job.id === parseInt(id,10))
    }

    static replaceJobData(id, job_category,
        job_location,
        job_designation,
        company_name,
        salary,
        number_of_openings,
        skills_required,
        apply_by){
        let index = jobs.findIndex(job => job.id === parseInt(id,10))
        let Id = Number(id)
       
        let Openings = Number(number_of_openings)
        if(index !== -1){
            jobs[index] = new JobModel( Id,
                company_name,
                job_designation,
                job_location,
                salary,
                skills_required,
                apply_by,
                job_category,
                Openings
                )  
        }
        console.log(jobs)
    }

    static addNewJob(job_category,
        job_location,
        job_designation,
        company_name,
        salary,
        number_of_openings,
        skills_required,
        apply_by){
            let Openings = Number(number_of_openings)
            let newjob = new JobModel( jobs.length+1,
                company_name,
                job_designation,
                job_location,
                salary,
                skills_required,
                apply_by,
                job_category,
                Openings
                )
            jobs.push(newjob)    

    }

    static delete(id){
        let Id = Number(id);
        jobs.forEach((job)=>{
            if(Id < job.id){
                job.id -= 1;
            }
        })
        jobs.splice(Id-1,1);

    }
}

var jobs = [
    new JobModel(
        1,
        'Coding Ninjas',
        'SDE',
        'Gurgaon HR IND Remote',
        '14-20lpa',
        [ 'React','NodeJs','JS','SQL','MongoDB','Express','AWS'],
        '2023-08-30',
        'Tech',
        5
           
        
    ),
    new JobModel(
        2,
        'Go Digit',
       'Angular Developer',
        'Pune IND On-Site',
        '6-10lpa',
        ['Angular','JS','SQL','MongoDB','Express','AWS'],
        '2023-08-30',
        'Tech',
        7
    ),
    new JobModel(
        3,
        'Juspay',
        'SDE',
        'Bangalore IND',
        '20-26lpa',
        ['React','NodeJs','JS','SQL','MongoDB','Express','AWS'],
        '2023-08-30',
        'Tech',
        3
    )
]