<template>
<div class="editor-wrapper">
    <div class="sidebar-section">
        <div class="form-section">
            <PersonalDetailsForm  v-if="resume.personalInfo" :personalInfoData="resume.personalInfo" @value:updated="onPersonalInfoUpdated"/>
        </div>
        <div class="form-section">
            <EmploymentHistorySection :employments="resume.workExperiences" :resumeId="resume.id!" :resumeCreationDate="resume.creationDate" @updatedValue="updateValue"/>
        </div>
        <div class="form-section">
            <EducationSection :educations="resume.educations" :resumeId="resume.id!" :resumeCreationDate="resume.creationDate" @value:updated="updateValue"/>
        </div>
        <div class="form-section">
            <SkillsSection :skills="resume.skills"/>
        </div>
    </div>

    <div class="preview-section" ref="previewSection">
        <div class="resume-preview" ref="resumePreview">
            <Resume :resumeData="resume"></Resume>
        </div>
        <button>Download</button>
    </div>
</div>
</template>

<script lang="ts" setup> 
import storageService from '@/services/storage-service';
import router from '@/router';
import Resume from '@/components/Resume.vue';
import { onMounted, ref, type Ref } from 'vue'
import { useElementSize, useResizeObserver } from '@vueuse/core'
import resumeService from '@/services/resume-service'
import { type ResumeVM, type CertificateVM, type WorkExperienceVM } from '@/api'
import { useRoute } from 'vue-router';
import PersonalDetailsForm from '@/components/forms/PersonalDetailsForm.vue';
import EmploymentHistorySection from '@/components/misc/EmploymentHistorySection.vue';
import EducationSection from '@/components/misc/EducationSection.vue';
import SkillsSection from '@/components/misc/SkillsSection.vue';

const route = useRoute();
let resume: Ref<ResumeVM> = ref({});
    
let resumePreviewScale: Ref<number> = ref(0.9);
let resumePreview = ref(), previewSection = ref();
let resumePreviewElement = useElementSize(resumePreview);
let previewSectionElement = useElementSize(previewSection);

onMounted(async ()=>{

    if(!storageService.checkForUserLogin()) router.push({name:'login'});

    resumeService.getResumeById(route.params.id as string).then((res)=>{
        resume.value = res.data;
   });

    resumePreviewScale.value = Math.min(previewSectionElement.width.value / resumePreviewElement.width.value, previewSectionElement.height.value / resumePreviewElement.height.value - 0.1);
    useResizeObserver(previewSection, (entries)=>{
        const entry = entries[0];
        const {width, height} = entry.contentRect;
        resumePreviewScale.value = Math.min(width / resumePreviewElement.width.value, height / resumePreviewElement.height.value -0.1);
    })
})

async function updateValue() {
//     resumeService.getResumeById(route.params.id as string).then((res)=>{
//         resume.value = res.data;
//    });

   resume.value = (await resumeService.getResumeById(route.params.id as string)).data;
}

function addEducation() {
    resume.value.educations?.push({});
}

function onPersonalInfoUpdated(personalInfo: any) {

    if(resume.value.personalInfo) {
        resume.value.personalInfo.firstName = personalInfo.FirstName;
        resume.value.personalInfo.lastName = personalInfo.LastName;
        resume.value.personalInfo.address = personalInfo.Address;
        resume.value.personalInfo.description = personalInfo.Description;
        resume.value.personalInfo.email = personalInfo.Email;
        resume.value.personalInfo.phoneNumber = personalInfo.Phone;
    }
} 

</script>

<style lang="scss" scoped>
.editor-wrapper {
    height: 100vh;

    flex-direction: row;

    .sidebar-section {
        width: 50%;
        height: fit-content;
        background: white;
        box-sizing: border-box;
        padding: 48px;

        .form-section {
            margin-bottom: 3rem;
        }
    }

    .preview-section {
        position: fixed;
        top: 0px;
        bottom: 0px;
        right: 0px;
        width: 50%;
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-flow: column nowrap;
        background-color: rgb(101, 110, 131);
        color: rgb(255, 255, 255);
        user-select: none;
        z-index: 0;
        box-sizing: border-box;
        padding: 1rem;

        .resume-preview {
            transform: scale(v-bind(resumePreviewScale))
        }
    }
}
</style>