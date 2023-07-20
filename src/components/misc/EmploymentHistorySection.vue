<template>
    <h1 class="heading">Employment History</h1>
    <EmploymentHistoryForm v-for="workExperience in props.employments" :workExperienceData="workExperience" @updated:value="onValueUpdate" @deleted:employment="onDeletedEmployment"></EmploymentHistoryForm>
    <div class="add-employment-button" @click="addEmployment">+ Add employment</div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import EmploymentHistoryForm from '../forms/EmploymentHistoryForm.vue'
import type { WorkExperienceVM } from '@/api';
import workExperienceService from '@/services/workExperience-service';

const props = defineProps<{
    employments?: Array<WorkExperienceVM> | null | undefined,
    resumeId?: string,
    resumeCreationDate?: Date | undefined,
}>();

const emits = defineEmits(["updatedValue"])

function addEmployment() {
    workExperienceService.addWorkExperienceToResume(props.resumeId!, {companyName:'', position: '', startDate: new Date(), endDate: new Date(), location:'', description:''} as WorkExperienceVM).then(()=>{
        emits('updatedValue');
    })
}

function onValueUpdate(id: number, data: any) {
    workExperienceService.updateWorkExperience(id, data as WorkExperienceVM).then(()=>{
        emits('updatedValue');
    })
}

function onDeletedEmployment(id: number) {
    workExperienceService.deleteWorkExperience(id).then(()=>{
        emits('updatedValue');
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

.add-employment-button {
    color: rgb(26, 145, 240);
    font-weight: 600;
    cursor: pointer;
}
</style>