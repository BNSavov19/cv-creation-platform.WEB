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
 * @interface ResumeResumesBody
 */
export interface ResumeResumesBody {
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    title?: string;
    /**
     * 
     * @type {Date}
     * @memberof ResumeResumesBody
     */
    creationDate?: Date;
    /**
     * 
     * @type {Blob}
     * @memberof ResumeResumesBody
     */
    personalInfoPhoto?: Blob;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoMiddleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoPhoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    unknownSectionTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    unknownSectionDescription?: string;
    /**
     * 
     * @type {Date}
     * @memberof ResumeResumesBody
     */
    unknownSectionStartDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ResumeResumesBody
     */
    unknownSectionEndDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    templateTemplateName?: string;
}
