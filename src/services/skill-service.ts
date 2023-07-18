import { SkillApi, type SkillVM} from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class SkillService extends WebApiService {

    constructor() {
        super();
        this.skillApi = new SkillApi();
    }

    skillApi: SkillApi;

    public async addSkillToResume(resumeId: string, skillData: SkillVM): Promise<AxiosResponse<any>> {
        return await this.skillApi.apiSkillSkillsResumeIdPostForm(resumeId, skillData!.skillName!, this.generateHeader());
    }

    public async updateSkill(skillId: number, skillData: SkillVM): Promise<AxiosResponse<any>>
    {
        return await this.skillApi.apiSkillSkillsSkillIdPutForm(skillId, skillData!.skillName!, this.generateHeader())
    }

    public async deleteSkill(skillId: number)
    {
        return await this.skillApi.apiSkillSkillsSkillIdDelete(skillId, this.generateHeader())
    }
}

const skillService = new SkillService();
export default skillService;