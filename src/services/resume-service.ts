import { ResumeApi, type ResumeDTO} from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class ResumeService extends WebApiService {

    constructor() {
        super();
        this.resumeApi = new ResumeApi();
    }

    resumeApi: ResumeApi;

    public async getAllResumes(userId: string): Promise<AxiosResponse<Array<ResumeDTO>, any>> {
        return await this.resumeApi.apiResumeUserResumesUserIdGet(userId, this.generateHeader());
    }

    public async getResumeById(resumeId: string):  Promise<AxiosResponse<ResumeDTO>>
    {
        return await this.resumeApi.apiResumeResumesIdGet(resumeId, this.generateHeader());
    }

    // public async updateResume(resume: ResumeDTO): Promise<AxiosResponse<ResumeDTO>>
    // {
    //     return await this.resumeApi.apiResumeResumesIdPutForm('id', resume.userId, resume.title, resume.creationDate, resume.personalInfo?.photoUrl,
    //     resume.personalInfo?.fullName, resume.personalInfo?.address, resume.personalInfo?.phoneNumber, resume.personalInfo?.email, resume.unknownSection?.title,
    //     resume.unknownSection?.description, resume.unknownSection?.startDate, resume.unknownSection?.endDate, resume.template?.templateName,
    //     resume.template?.cssClassName, resume.template?.filePath, resume.certificates, resume.educations, resume.workExperiences, resume.languages,
    //     resume.skills, this.generateHeader());
    // }

}

const resumeService = new ResumeService();
export default resumeService;