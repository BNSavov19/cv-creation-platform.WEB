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
 * SkillApi - axios parameter creator
 * @export
 */
export const SkillApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [skillName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSkillSkillsResumeIdPostForm: async (resumeId: string, skillName?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resumeId' is not null or undefined
            if (resumeId === null || resumeId === undefined) {
                throw new RequiredError('resumeId','Required parameter resumeId was null or undefined when calling apiSkillSkillsResumeIdPostForm.');
            }
            const localVarPath = `/api/Skill/skills/{resumeId}`
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


            if (skillName !== undefined) { 
                localVarFormParams.append('SkillName', skillName as any);
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
         * @param {number} skillId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSkillSkillsSkillIdDelete: async (skillId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'skillId' is not null or undefined
            if (skillId === null || skillId === undefined) {
                throw new RequiredError('skillId','Required parameter skillId was null or undefined when calling apiSkillSkillsSkillIdDelete.');
            }
            const localVarPath = `/api/Skill/skills/{skillId}`
                .replace(`{${"skillId"}}`, encodeURIComponent(String(skillId)));
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
         * @param {number} skillId 
         * @param {string} [skillName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSkillSkillsSkillIdPutForm: async (skillId: number, skillName?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'skillId' is not null or undefined
            if (skillId === null || skillId === undefined) {
                throw new RequiredError('skillId','Required parameter skillId was null or undefined when calling apiSkillSkillsSkillIdPutForm.');
            }
            const localVarPath = `/api/Skill/skills/{skillId}`
                .replace(`{${"skillId"}}`, encodeURIComponent(String(skillId)));
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


            if (skillName !== undefined) { 
                localVarFormParams.append('SkillName', skillName as any);
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
 * SkillApi - functional programming interface
 * @export
 */
export const SkillApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [skillName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSkillSkillsResumeIdPostForm(resumeId: string, skillName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SkillApiAxiosParamCreator(configuration).apiSkillSkillsResumeIdPostForm(resumeId, skillName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} skillId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSkillSkillsSkillIdDelete(skillId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SkillApiAxiosParamCreator(configuration).apiSkillSkillsSkillIdDelete(skillId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} skillId 
         * @param {string} [skillName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSkillSkillsSkillIdPutForm(skillId: number, skillName?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SkillApiAxiosParamCreator(configuration).apiSkillSkillsSkillIdPutForm(skillId, skillName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SkillApi - factory interface
 * @export
 */
export const SkillApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} resumeId 
         * @param {string} [skillName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSkillSkillsResumeIdPostForm(resumeId: string, skillName?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SkillApiFp(configuration).apiSkillSkillsResumeIdPostForm(resumeId, skillName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} skillId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSkillSkillsSkillIdDelete(skillId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SkillApiFp(configuration).apiSkillSkillsSkillIdDelete(skillId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} skillId 
         * @param {string} [skillName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSkillSkillsSkillIdPutForm(skillId: number, skillName?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SkillApiFp(configuration).apiSkillSkillsSkillIdPutForm(skillId, skillName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SkillApi - object-oriented interface
 * @export
 * @class SkillApi
 * @extends {BaseAPI}
 */
export class SkillApi extends BaseAPI {
    /**
     * 
     * @param {string} resumeId 
     * @param {string} [skillName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SkillApi
     */
    public async apiSkillSkillsResumeIdPostForm(resumeId: string, skillName?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SkillApiFp(this.configuration).apiSkillSkillsResumeIdPostForm(resumeId, skillName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} skillId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SkillApi
     */
    public async apiSkillSkillsSkillIdDelete(skillId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SkillApiFp(this.configuration).apiSkillSkillsSkillIdDelete(skillId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} skillId 
     * @param {string} [skillName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SkillApi
     */
    public async apiSkillSkillsSkillIdPutForm(skillId: number, skillName?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SkillApiFp(this.configuration).apiSkillSkillsSkillIdPutForm(skillId, skillName, options).then((request) => request(this.axios, this.basePath));
    }
}
