<template>
    <h1 class="heading">Education</h1>
    <EducationForm v-for="education in props.educations" :educationData="education" @deleted:education="onDeletedEducation" @updated:value="onValueUpdate"/>
    <div class="add-education-button" @click="addEducation">+ Add education</div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import EducationForm from '../forms/EducationForm.vue';
import type { EducationVM } from '@/api';
import educationService from '@/services/education-service';

const props = defineProps<{
    educations?: Array<EducationVM> | null | undefined,
    resumeId?: string,
    resumeCreationDate?: Date | undefined,
}>();

const emits = defineEmits(['value:updated'])

function addEducation() {
    educationService.addEducationToResume(props.resumeId!, {instituteName:null, degree: null, fieldOfStudy: null, startDate: props.resumeCreationDate, endDate:  props.resumeCreationDate} as EducationVM).then(()=>{
        emits('value:updated');
    })
}

function onValueUpdate(id: number, data: any) {
    educationService.updateEducation(id, data as EducationVM).then(()=>{
        emits('value:updated');
    })
}

function onDeletedEducation(id: number) {
    educationService.deleteEducation(id).then(()=>{
        emits('value:updated');
    })
}

</script>

<style lang="scss" scoped>
@import '../../styles/imports.scss';

.heading {
    font-family: 'Gothic A1';
    font-size: 1.6rem;
    font-weight: 800;
    color: #1E2532;
    margin-bottom: 1rem; 
}

.add-education-button {
    color: rgb(26, 145, 240);
    font-weight: 600;
    cursor: pointer;
}
</style>