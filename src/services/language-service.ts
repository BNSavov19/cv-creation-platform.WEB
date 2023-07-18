import { LanguageApi, type LanguageVM} from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class LanguageService extends WebApiService {

    constructor() {
        super();
        this.languageApi = new LanguageApi();
    }

    languageApi: LanguageApi;

    public async addLanguageToResume(resumeId: string, languageData: LanguageVM): Promise<AxiosResponse<any>> {
        return await this.languageApi.apiLanguageLanguagesResumeIdPostForm(resumeId, languageData!.name!, languageData!.level!,
        this.generateHeader());
    }

    public async updateLanguage(languageId: number, languageData: LanguageVM): Promise<AxiosResponse<any>>
    {
        return await this.languageApi.apiLanguageLanguagesLanguageIdPutForm(languageId, languageData!.name!, languageData!.level!,
            this.generateHeader())
    }

    public async deleteLanguage(languageId: number)
    {
        return await this.languageApi.apiLanguageLanguagesLanguageIdDelete(languageId, this.generateHeader())
    }
}

const languageService = new LanguageService();
export default languageService;