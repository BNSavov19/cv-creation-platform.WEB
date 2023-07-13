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

}

const resumeService = new ResumeService();
export default resumeService;