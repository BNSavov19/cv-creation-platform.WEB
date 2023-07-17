<template>
    <h1 class="heading">Education</h1>
    <EducationForm v-for="education in props.educations" :educationData="education"/>
    <div class="add-education-button" @click="addEducation">+ Add education</div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import EmploymentHistoryForm from '../forms/EmploymentHistoryForm.vue'
import { type WorkExperienceDTO } from '../../api/models/work-experience-dto'
import EducationForm from '../forms/EducationForm.vue';
import type { EducationDTO } from '@/api';

const props = defineProps<{
    educations?: Array<EducationDTO> | null | undefined
}>();

const emits = defineEmits(['add:education'])

function addEducation() {
    emits('add:education');
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