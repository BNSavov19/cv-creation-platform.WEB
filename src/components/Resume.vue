<template>
    <div class="resume-wrapper" id="resume-wrapper" :class="`template-${resumeData.template?.templateName}`">

        <div class="top-section">
            <div class="photo">
                <img v-if="props.resumeData.personalInfo?.photoUrl" :src="props.resumeData.personalInfo.photoUrl" alt="photo">
            </div>

            <div class="title">
                <!-- <h1>{{props.resumeData.personalInfo?.fullName}}</h1> -->
                <span>{{props.resumeData.personalInfo?.firstName}} {{props.resumeData.personalInfo?.lastName}}</span>
            </div>    
            
            <div class="details">
                <span>{{props.resumeData.personalInfo?.email}}, </span>
                <span>{{props.resumeData.personalInfo?.address}}, </span>
                <span>{{props.resumeData.personalInfo?.phoneNumber}}</span>
            </div>
        </div>
        
        <div class="sections-wrapper">
            <div class="section profile-info-section">
                <h1 class="section-title">Profile</h1>
                <div class="section-data">
                    <p class="profile-info">Dynamic Executive with six years of experience helping organizations reach their full potential. Adept in making key decisions and working with other professionals to achieve goals and solve problems. Experienced in managing employee and community programs, and dedicated to successfully directing business operations.
                    </p>
                </div>
            </div>

            <div class="section work-experience-section">
                <h1 class="section-title">Experience</h1>
                <div class="section-data">
                    <div v-for="workExperience in props.resumeData.workExperiences" class="work-experience">
                        <h1 class="title" v-if="workExperience.position">{{workExperience.position}}, {{ workExperience.companyName }}</h1>
                        <span class="duration" v-if="workExperience.startDate && workExperience.endDate">{{workExperience.startDate}} - {{workExperience.endDate}}</span>
                        <p class="description" v-if="workExperience.description">{{workExperience.description}}</p>
                    </div>
                </div>
            </div>
            
            <div class="section education-section">
                <h1 class="section-title">Education</h1>
                <div class="section-data">
                    <div v-for="education in props.resumeData.educations" class="education">
                        <h1 class="title"><span v-if="education.degree && education.degree != 'null'">{{education.degree}},</span> <span v-if="education.fieldOfStudy && education.fieldOfStudy != 'null'">{{education.fieldOfStudy}},</span> <span v-if="education.instituteName && education.instituteName != 'null'">{{education.instituteName}}</span></h1>
                        <span class="duration">{{education.startDate}} - {{education.endDate}}</span>
                    </div>
                </div>
            </div>

            <div class="section skills-section">
                <h1 class="section-title">Skills</h1>
                <ul class="section-data">
                    <li v-for="skill in props.resumeData.skills" class="skill">
                        <span class="skill-title">{{skill.skillName}}</span>
                    </li>
                </ul>
            </div>

            <div class="section certification-section">
                <h1 class="section-title">Certifications</h1>
                <div class="section-data">
                    <div v-for="certificate in props.resumeData.certificates" class="certificate">
                        <span class="certificate-name">{{certificate.certificateName}}</span><span v-if="certificate.issuingOrganization">, {{certificate.issuingOrganization}}</span><br>
                        <span class="certificate-issue-date">{{certificate.issueDate}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup> 
import { type ResumeVM } from '@/api';
import resumeService from '@/services/resume-service';
import { onMounted, onUpdated } from 'vue';

const props = defineProps<{
    resumeData: ResumeVM,
}>()

</script>

<style lang="scss" scoped>
@import '../styles/templates/templates.scss';
</style>