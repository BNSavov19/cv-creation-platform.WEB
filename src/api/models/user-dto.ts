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
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    jwt?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UserDTO
     */
    jwtExpirationDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof UserDTO
     */
    refreshTokenExpirationDate?: Date | null;
}
