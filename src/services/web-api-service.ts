import storageService from "@/services/storage-service";
import { webApiBaseUrl } from "@/config";
import authService from "./authentication-service";

export abstract class WebApiService {
  protected generateHeader(): object {
    return {
      headers: {
        Authorization: `Bearer ${storageService.retrieveToken()}`,
      },
    }
  }

  // protected checkForTokenExpiration(): void {
  //   let now = new Date();
  //   now.setHours(0, 0, 0, 0)
  //     if(new Date(storageService.retrieveExpDate()!) <= now) {
  //       authService.renewToken(storageService.retrieveRefreshToken()!).then((res)=>{
  //         storageService.saveRefreshToken(res.data.refreshToken!);
  //         storageService.saveExpDate(res.data.refreshTokenExpirationDate!.toString());
  //       });
  //     }
  // }
}
