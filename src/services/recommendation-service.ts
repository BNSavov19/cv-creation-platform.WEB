import { RecommendationApi } from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class RecommendationService extends WebApiService {

    constructor() {
        super();
        this.recommendationApi = new RecommendationApi();
    }

    recommendationApi: RecommendationApi;

    public async getSkillRecommendations(text: string): Promise<AxiosResponse<any>> {
        return await this.recommendationApi.apiRecommendationRecommendationsPostForm(text, this.generateHeader());
    }
}

const recommendationService = new RecommendationService();
export default recommendationService;