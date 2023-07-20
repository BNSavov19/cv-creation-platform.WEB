/* tslint:disable */
/* eslint-disable */
/**
 * CVCreationPlatform.API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * CertificateApi - axios parameter creator
 * @export
 */
export const CertificateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCertificateCertificatesCertificateIdDelete: async (certificateId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'certificateId' is not null or undefined
            if (certificateId === null || certificateId === undefined) {
                throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling apiCertificateCertificatesCertificateIdDelete.');
            }
            const localVarPath = `/api/Certificate/certificates/{certificateId}`
                .replace(`{${"certificateId"}}`, encodeURIComponent(String(certificateId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} certificateId 
         * @param {string} [certificateName] 
         * @param {string} [issuingOrganization] 
         * @param {string} [issueDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCertificateCertificatesCertificateIdPutForm: async (certificateId: number, certificateName?: string, issuingOrganization?: string, issueDate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'certificateId' is not null or undefined
            if (certificateId === null || certificateId === undefined) {
                throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling apiCertificateCertificatesCertificateIdPutForm.');
            }
            const localVarPath = `/api/Certificate/certificates/{certificateId}`
                .replace(`{${"certificateId"}}`, encodeURIComponent(String(certificateId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication oauth2 required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }


            if (certificateName !== undefined) { 
                localVarFormParams.append('CertificateName', certificateName as any);
            }

            if (issuingOrganization !== undefined) { 
                localVarFormParams.append('IssuingOrganization', issuingOrganization as any);
            }

            if (issueDate !== undefined) { 
                localVarFormParams.append('IssueDate', issueDate as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [certificateName] 
         * @param {string} [issuingOrganization] 
         * @param {string} [issueDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCertificateCertificatesResumeIdPostForm: async (resumeId: string, certificateName?: string, issuingOrganization?: string, issueDate?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resumeId' is not null or undefined
            if (resumeId === null || resumeId === undefined) {
                throw new RequiredError('resumeId','Required parameter resumeId was null or undefined when calling apiCertificateCertificatesResumeIdPostForm.');
            }
            const localVarPath = `/api/Certificate/certificates/{resumeId}`
                .replace(`{${"resumeId"}}`, encodeURIComponent(String(resumeId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication oauth2 required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }


            if (certificateName !== undefined) { 
                localVarFormParams.append('CertificateName', certificateName as any);
            }

            if (issuingOrganization !== undefined) { 
                localVarFormParams.append('IssuingOrganization', issuingOrganization as any);
            }

            if (issueDate !== undefined) { 
                localVarFormParams.append('IssueDate', issueDate as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CertificateApi - functional programming interface
 * @export
 */
export const CertificateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCertificateCertificatesCertificateIdDelete(certificateId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CertificateApiAxiosParamCreator(configuration).apiCertificateCertificatesCertificateIdDelete(certificateId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} certificateId 
         * @param {string} [certificateName] 
         * @param {string} [issuingOrganization] 
         * @param {string} [issueDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCertificateCertificatesCertificateIdPutForm(certificateId: number, certificateName?: string, issuingOrganization?: string, issueDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CertificateApiAxiosParamCreator(configuration).apiCertificateCertificatesCertificateIdPutForm(certificateId, certificateName, issuingOrganization, issueDate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [certificateName] 
         * @param {string} [issuingOrganization] 
         * @param {string} [issueDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCertificateCertificatesResumeIdPostForm(resumeId: string, certificateName?: string, issuingOrganization?: string, issueDate?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CertificateApiAxiosParamCreator(configuration).apiCertificateCertificatesResumeIdPostForm(resumeId, certificateName, issuingOrganization, issueDate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CertificateApi - factory interface
 * @export
 */
export const CertificateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {number} certificateId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCertificateCertificatesCertificateIdDelete(certificateId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CertificateApiFp(configuration).apiCertificateCertificatesCertificateIdDelete(certificateId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} certificateId 
         * @param {string} [certificateName] 
         * @param {string} [issuingOrganization] 
         * @param {string} [issueDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCertificateCertificatesCertificateIdPutForm(certificateId: number, certificateName?: string, issuingOrganization?: string, issueDate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CertificateApiFp(configuration).apiCertificateCertificatesCertificateIdPutForm(certificateId, certificateName, issuingOrganization, issueDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [certificateName] 
         * @param {string} [issuingOrganization] 
         * @param {string} [issueDate] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCertificateCertificatesResumeIdPostForm(resumeId: string, certificateName?: string, issuingOrganization?: string, issueDate?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CertificateApiFp(configuration).apiCertificateCertificatesResumeIdPostForm(resumeId, certificateName, issuingOrganization, issueDate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CertificateApi - object-oriented interface
 * @export
 * @class CertificateApi
 * @extends {BaseAPI}
 */
export class CertificateApi extends BaseAPI {
    /**
     * 
     * @param {number} certificateId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificateApi
     */
    public async apiCertificateCertificatesCertificateIdDelete(certificateId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CertificateApiFp(this.configuration).apiCertificateCertificatesCertificateIdDelete(certificateId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} certificateId 
     * @param {string} [certificateName] 
     * @param {string} [issuingOrganization] 
     * @param {string} [issueDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificateApi
     */
    public async apiCertificateCertificatesCertificateIdPutForm(certificateId: number, certificateName?: string, issuingOrganization?: string, issueDate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CertificateApiFp(this.configuration).apiCertificateCertificatesCertificateIdPutForm(certificateId, certificateName, issuingOrganization, issueDate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} resumeId 
     * @param {string} [certificateName] 
     * @param {string} [issuingOrganization] 
     * @param {string} [issueDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CertificateApi
     */
    public async apiCertificateCertificatesResumeIdPostForm(resumeId: string, certificateName?: string, issuingOrganization?: string, issueDate?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CertificateApiFp(this.configuration).apiCertificateCertificatesResumeIdPostForm(resumeId, certificateName, issuingOrganization, issueDate, options).then((request) => request(this.axios, this.basePath));
    }
}
