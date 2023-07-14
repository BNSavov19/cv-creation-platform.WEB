<template>
    <h1 class="heading">Employment History</h1>
    <EmploymentHistoryForm v-for="workExperience in props.employments" :workExperienceData="workExperience"></EmploymentHistoryForm>
    <div class="add-employment-button" @click="addEmployment">+ Add employment</div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import EmploymentHistoryForm from '../forms/EmploymentHistoryForm.vue'
import { type WorkExperienceDTO } from '../../api/models/work-experience-dto'

const props = defineProps<{
    employments?: Array<WorkExperienceDTO>
}>();

const emits = defineEmits(['add:employment'])

function addEmployment() {
    emits('add:employment');
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