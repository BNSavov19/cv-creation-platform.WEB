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
 * @interface CertificateVM
 */
export interface CertificateVM {
    /**
     * 
     * @type {number}
     * @memberof CertificateVM
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CertificateVM
     */
    certificateName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CertificateVM
     */
    issuingOrganization?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CertificateVM
     */
    issueDate?: Date | null;
}
