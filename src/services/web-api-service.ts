import storageService from "@/services/storage-service";
import { webApiBaseUrl } from "@/config";

export abstract class WebApiService {
  protected generateHeader(): object {
    return {
      headers: {
        Authorization: `Bearer ${storageService.retrieveToken()}`,
      },
    }
  }
}
