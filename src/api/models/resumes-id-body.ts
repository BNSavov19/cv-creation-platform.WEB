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
 * @interface ResumesIdBody
 */
export interface ResumesIdBody {
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    title?: string;
    /**
     * 
     * @type {Date}
     * @memberof ResumesIdBody
     */
    creationDate?: Date;
    /**
     * 
     * @type {Blob}
     * @memberof ResumesIdBody
     */
    personalInfoPhoto?: Blob;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoMiddleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoPhoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    personalInfoEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    unknownSectionTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    unknownSectionDescription?: string;
    /**
     * 
     * @type {Date}
     * @memberof ResumesIdBody
     */
    unknownSectionStartDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ResumesIdBody
     */
    unknownSectionEndDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ResumesIdBody
     */
    templateTemplateName?: string;
}
