import { WorkExperienceApi, type WorkExperienceVM} from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class WorkExperienceService extends WebApiService {

    constructor() {
        super();
        this.workExperienceApi = new WorkExperienceApi();
    }

    workExperienceApi: WorkExperienceApi;

    public async addWorkExperienceToResume(resumeId: string, workExperienceData: WorkExperienceVM): Promise<AxiosResponse<any>> {
        return await this.workExperienceApi.apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId, workExperienceData!.companyName!, workExperienceData!.position!,
            workExperienceData!.startDate!, workExperienceData!.endDate!, workExperienceData!.location!, workExperienceData!.description!, this.generateHeader());
    }

    public async updateWorkExperience(workExperienceId: number, workExperienceData: WorkExperienceVM): Promise<AxiosResponse<any>>
    {
        return await this.workExperienceApi.apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId,workExperienceData!.companyName!, workExperienceData!.position!,
            workExperienceData!.startDate!, workExperienceData!.endDate!, workExperienceData!.location!, workExperienceData!.description!, this.generateHeader())
    }

    public async deleteWorkExperience(workExperienceId: number)
    {
        return await this.workExperienceApi.apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId, this.generateHeader())
    }
}

const workExperienceService = new WorkExperienceService();
export default workExperienceService;