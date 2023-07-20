import { ResumeApi, type PersonalInfoVM, type ResumeVM } from "@/api";
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
    
    public async updateResume(id:string, userId: string, title: string, creationDate: Date, personalInfo: PersonalInfoVM, photo: Blob | undefined, unkownSectionTitle: string, unkownSectionDescription: string,
        unknownSectionStartDate: Date, unkownSectionEndDate: Date, templateName: string) {
        return await this.resumeApi.apiResumeResumesIdPutForm(id, userId, title, creationDate, photo, personalInfo.firstName, personalInfo.middleName, personalInfo.lastName,
            personalInfo.description, personalInfo.address, personalInfo.phoneNumber, personalInfo.email, unkownSectionTitle, unkownSectionDescription, unknownSectionStartDate,
            unkownSectionEndDate, templateName, this.generateHeader());
    }

    public async shareResume(firstName: string, lastName: string, email: string, resume: Blob) {
        return await this.resumeApi.apiResumeResumesSharePostForm(firstName, lastName, email, resume, this.generateHeader());
    }
}

const resumeService = new ResumeService();
export default resumeService;