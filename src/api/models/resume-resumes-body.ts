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
import { CertificateDTO } from './certificate-dto';
import { EducationDTO } from './education-dto';
import { LanguageDTO } from './language-dto';
import { SkillsDTO } from './skills-dto';
import { WorkExperienceDTO } from './work-experience-dto';
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
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoPhotoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    personalInfoFullName?: string;
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
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    templateCssClassName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResumeResumesBody
     */
    templateFilePath?: string;
    /**
     * 
     * @type {Array<CertificateDTO>}
     * @memberof ResumeResumesBody
     */
    certificates?: Array<CertificateDTO>;
    /**
     * 
     * @type {Array<EducationDTO>}
     * @memberof ResumeResumesBody
     */
    educations?: Array<EducationDTO>;
    /**
     * 
     * @type {Array<WorkExperienceDTO>}
     * @memberof ResumeResumesBody
     */
    workExperiences?: Array<WorkExperienceDTO>;
    /**
     * 
     * @type {Array<LanguageDTO>}
     * @memberof ResumeResumesBody
     */
    languages?: Array<LanguageDTO>;
    /**
     * 
     * @type {Array<SkillsDTO>}
     * @memberof ResumeResumesBody
     */
    skills?: Array<SkillsDTO>;
}
