export default class ApplicantModel{
    constructor(jobId,name,email,contact,filename){
        this.jobId = jobId,
        this.name=name,
        this.email = email,
        this.contact = contact,
        this.filename = filename
    }

    static addApplicant(jobId,name,email,contact,filename){
        let applicant = new ApplicantModel(jobId,name,email,contact,filename)
        applicantList.push(applicant);
    }

    static getApplicants(jobId){
       return applicantList.find(a => a.jobId==jobId)
    }
}

var applicantList = []