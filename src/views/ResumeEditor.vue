<template>
<div class="editor-wrapper">
    <div class="sidebar-section">
        <PersonalDetailsForm :personalInfoData="resume.personalInfo"/>
        <EmploymentHistorySection :employments="resume.workExperiences" @add:employment="addEmployment"></EmploymentHistorySection>
    </div>

    <div class="preview-section" ref="previewSection">
        <div class="resume-preview" ref="resumePreview">
            <Resume :resumeData="resume"></Resume>
        </div>
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
import { type ResumeDTO } from '@/api'
import { useRoute } from 'vue-router';
import PersonalDetailsForm from '@/components/forms/PersonalDetailsForm.vue';
import EmploymentHistorySection from '@/components/misc/EmploymentHistorySection.vue';

const route = useRoute();
let resume: Ref<ResumeDTO> = ref({});
    
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

function addEmployment() {
    resume.value.workExperiences?.push({});
    
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