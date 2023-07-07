import {
    LOCAL_STORAGE_TOKEN_KEY
} from '@/shared/constants'

class StorageService {
    public retrieveToken(): string | null {
        try {
            const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
            if (!accessToken) {
              return null;
            }
            return accessToken;
          } catch (e) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
            return null;
          }
    }

    public saveToken(token: string | null): void {
        if (token) {
          localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
        } else {
          localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
        }
    }

    public checkForUserLogin(): boolean {
        const token = this.retrieveToken();
        if (token) {
            return true;
        }
        return false;
    }
}

const storageService = new StorageService();
export default storageService;