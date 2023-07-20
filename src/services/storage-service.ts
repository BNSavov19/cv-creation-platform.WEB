import {
    LOCAL_STORAGE_TOKEN_KEY,
    LOCAL_STORAGE_USER_ID_KEY,
    LOCAL_STORAGE_REFRESH_TOKEN_KEY,
    LOCAL_STORAGE_TOKEN_EXPIRTAION_KEY,
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

  public retrieveRefreshToken(): string | null {
      try {
          const refreshToken = localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
          if (!refreshToken) {
            return null;
          }
          return refreshToken;
        } catch (e) {
          localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
          return null;
        }
  }

  public saveExpDate(date: string | null): void {
    if (date) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_EXPIRTAION_KEY, date);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_EXPIRTAION_KEY);
    }
}

public retrieveExpDate(): string | null {
  try {
      const date = localStorage.getItem(LOCAL_STORAGE_TOKEN_EXPIRTAION_KEY);
      if (!date) {
        return null;
      }
      return date;
    } catch (e) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_EXPIRTAION_KEY);
      return null;
    }
}

  public saveRefreshToken(refreshToken: string | null): void {
      if (refreshToken) {
        localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
      }
  }

    public retrieveUserId(): string | null {
      try {
          const uid = localStorage.getItem(LOCAL_STORAGE_USER_ID_KEY);
          if (!uid) {
            return null;
          }
          return uid;
        } catch (e) {
          localStorage.removeItem(LOCAL_STORAGE_USER_ID_KEY);
          return null;
        }
  } 

    public saveUserId(uid: string | null): void {
      if (uid) {
        localStorage.setItem(LOCAL_STORAGE_USER_ID_KEY, uid);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_USER_ID_KEY);
      }
    }



    public checkForUserLogin(): boolean {
        const token = this.retrieveToken();
        const uid = this.retrieveUserId()
        if (token && uid) {
            return true;
        }
        return false;
    }
}

const storageService = new StorageService();
export default storageService;