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
/**
 * 
 * @export
 * @interface EducationVM
 */
export interface EducationVM {
    /**
     * 
     * @type {number}
     * @memberof EducationVM
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    instituteName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    degree?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EducationVM
     */
    fieldOfStudy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EducationVM
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof EducationVM
     */
    endDate?: Date | null;
}
