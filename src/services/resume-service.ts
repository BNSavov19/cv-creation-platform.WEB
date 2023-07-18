import { ResumeApi, type ResumeVM } from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class ResumeService extends WebApiService {

    constructor() {
        super();
        this.resumeApi = new ResumeApi();
    }

    resumeApi: ResumeApi;

    public async getAllResumes(userId: string): Promise<AxiosResponse<Array<ResumeVM>, any>> {
        return await this.resumeApi.apiResumeUserResumesUserIdGet(userId, this.generateHeader());
    }

    public async getResumeById(resumeId: string):  Promise<AxiosResponse<ResumeVM>>
    {
        return await this.resumeApi.apiResumeResumesIdGet(resumeId, this.generateHeader());
    }

    // public async updateResume(resume: ResumeVM, profileImage?: Blob)
    // {

    //     let employments: WorkExperienceDTO[] = [];

    //     for(let we of resume.workExperiences)
    //     {
    //         let employment: WorkExperienceDTO = {
    //             companyName: we.companyName,
    //             position: we.position,
    //             startDate: we.startDate,
    //             endDate: we.endDate,
    //             location: we.location,
    //             description: we.description
    //         }
    //         employments.push(employment);

    //     }

    //     await this.resumeApi.apiResumeResumesIdPutForm(resume.id, resume.userId, resume.title, resume.creationDate, profileImage, resume.personalInfo?.photoUrl, 
    //         resume.personalInfo?.firstName, resume.personalInfo?.middleName, resume.personalInfo?.lastName, resume.personalInfo?.description, resume.personalInfo?.address,
    //         resume.personalInfo?.phoneNumber, resume.personalInfo?.email, resume.unknownSection?.title, resume.unknownSection?.description, resume.creationDate,
    //         resume.creationDate, resume.template?.templateName, resume.certificates, resume.educations,  employments , resume.languages, resume.skills,
    //         this.generateHeader())
    // }



}

const resumeService = new ResumeService();
export default resumeService;