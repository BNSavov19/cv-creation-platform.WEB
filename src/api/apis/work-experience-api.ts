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
import globalAxios, { type AxiosResponse, type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * WorkExperienceApi - axios parameter creator
 * @export
 */
export const WorkExperienceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [companyName] 
         * @param {string} [position] 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {string} [location] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiWorkExperienceWorkExperiencesResumeIdPostForm: async (resumeId: string, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resumeId' is not null or undefined
            if (resumeId === null || resumeId === undefined) {
                throw new RequiredError('resumeId','Required parameter resumeId was null or undefined when calling apiWorkExperienceWorkExperiencesResumeIdPostForm.');
            }
            const localVarPath = `/api/WorkExperience/workExperiences/{resumeId}`
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


            if (companyName !== undefined) { 
                localVarFormParams.append('CompanyName', companyName as any);
            }

            if (position !== undefined) { 
                localVarFormParams.append('Position', position as any);
            }

            if (startDate !== undefined) { 
                localVarFormParams.append('StartDate', startDate as any);
            }

            if (endDate !== undefined) { 
                localVarFormParams.append('EndDate', endDate as any);
            }

            if (location !== undefined) { 
                localVarFormParams.append('Location', location as any);
            }

            if (description !== undefined) { 
                localVarFormParams.append('Description', description as any);
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
         * @param {number} workExperienceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiWorkExperienceWorkExperiencesWorkExperienceIdDelete: async (workExperienceId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workExperienceId' is not null or undefined
            if (workExperienceId === null || workExperienceId === undefined) {
                throw new RequiredError('workExperienceId','Required parameter workExperienceId was null or undefined when calling apiWorkExperienceWorkExperiencesWorkExperienceIdDelete.');
            }
            const localVarPath = `/api/WorkExperience/workExperiences/{workExperienceId}`
                .replace(`{${"workExperienceId"}}`, encodeURIComponent(String(workExperienceId)));
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
         * @param {number} workExperienceId 
         * @param {string} [companyName] 
         * @param {string} [position] 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {string} [location] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm: async (workExperienceId: number, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'workExperienceId' is not null or undefined
            if (workExperienceId === null || workExperienceId === undefined) {
                throw new RequiredError('workExperienceId','Required parameter workExperienceId was null or undefined when calling apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm.');
            }
            const localVarPath = `/api/WorkExperience/workExperiences/{workExperienceId}`
                .replace(`{${"workExperienceId"}}`, encodeURIComponent(String(workExperienceId)));
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


            if (companyName !== undefined) { 
                localVarFormParams.append('CompanyName', companyName as any);
            }

            if (position !== undefined) { 
                localVarFormParams.append('Position', position as any);
            }

            if (startDate !== undefined) { 
                localVarFormParams.append('StartDate', startDate as any);
            }

            if (endDate !== undefined) { 
                localVarFormParams.append('EndDate', endDate as any);
            }

            if (location !== undefined) { 
                localVarFormParams.append('Location', location as any);
            }

            if (description !== undefined) { 
                localVarFormParams.append('Description', description as any);
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
 * WorkExperienceApi - functional programming interface
 * @export
 */
export const WorkExperienceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [companyName] 
         * @param {string} [position] 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {string} [location] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId: string, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await WorkExperienceApiAxiosParamCreator(configuration).apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId, companyName, position, startDate, endDate, location, description, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} workExperienceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await WorkExperienceApiAxiosParamCreator(configuration).apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} workExperienceId 
         * @param {string} [companyName] 
         * @param {string} [position] 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {string} [location] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId: number, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await WorkExperienceApiAxiosParamCreator(configuration).apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId, companyName, position, startDate, endDate, location, description, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WorkExperienceApi - factory interface
 * @export
 */
export const WorkExperienceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [companyName] 
         * @param {string} [position] 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {string} [location] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId: string, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return WorkExperienceApiFp(configuration).apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId, companyName, position, startDate, endDate, location, description, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} workExperienceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return WorkExperienceApiFp(configuration).apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} workExperienceId 
         * @param {string} [companyName] 
         * @param {string} [position] 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {string} [location] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId: number, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return WorkExperienceApiFp(configuration).apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId, companyName, position, startDate, endDate, location, description, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkExperienceApi - object-oriented interface
 * @export
 * @class WorkExperienceApi
 * @extends {BaseAPI}
 */
export class WorkExperienceApi extends BaseAPI {
    /**
     * 
     * @param {string} resumeId 
     * @param {string} [companyName] 
     * @param {string} [position] 
     * @param {string} [startDate] 
     * @param {string} [endDate] 
     * @param {string} [location] 
     * @param {string} [description] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkExperienceApi
     */
    public async apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId: string, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return WorkExperienceApiFp(this.configuration).apiWorkExperienceWorkExperiencesResumeIdPostForm(resumeId, companyName, position, startDate, endDate, location, description, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} workExperienceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkExperienceApi
     */
    public async apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return WorkExperienceApiFp(this.configuration).apiWorkExperienceWorkExperiencesWorkExperienceIdDelete(workExperienceId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} workExperienceId 
     * @param {string} [companyName] 
     * @param {string} [position] 
     * @param {string} [startDate] 
     * @param {string} [endDate] 
     * @param {string} [location] 
     * @param {string} [description] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkExperienceApi
     */
    public async apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId: number, companyName?: string, position?: string, startDate?: string, endDate?: string, location?: string, description?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return WorkExperienceApiFp(this.configuration).apiWorkExperienceWorkExperiencesWorkExperienceIdPutForm(workExperienceId, companyName, position, startDate, endDate, location, description, options).then((request) => request(this.axios, this.basePath));
    }
}
