import { EducationApi, type EducationVM} from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class EducationService extends WebApiService {

    constructor() {
        super();
        this.educationApi = new EducationApi();
    }

    educationApi: EducationApi;

    public async addEducationToResume(resumeId: string, educationData: EducationVM): Promise<AxiosResponse<any>> {
        return await this.educationApi.apiEducationEducationsResumeIdPostForm(resumeId, educationData!.instituteName!, educationData!.degree!,
            educationData!.fieldOfStudy!, new Date().toDateString(), new Date().toDateString(), this.generateHeader());
    }

    public async updateEducation(educationId: number, educationData: EducationVM): Promise<AxiosResponse<any>>
    {
        return await this.educationApi.apiEducationEducationsEducationIdPutForm(educationId, educationData!.instituteName!, educationData!.degree!,
            educationData!.fieldOfStudy!, new Date().toDateString(), new Date().toDateString(), this.generateHeader())
    }

    public async deleteEducation(educationId: number)
    {
        return await this.educationApi.apiEducationEducationsEducationIdDelete(educationId, this.generateHeader())
    }
}

const educationService = new EducationService();
export default educationService;