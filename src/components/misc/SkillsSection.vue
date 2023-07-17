<template>
    <h1 class="heading">Skills</h1>

    <div class="suggestions-container">

    </div>

    <div class="skills-container">
        <SkillForm v-for="skill in props.skills" :skillName="skill.skillName!"/>
    </div>
    <div class="add-education-button" @click="addSkill">+ Add skill</div>
</template>

<script lang="ts" setup>
import type { SkillsDTO } from '@/api';
import SkillForm from '../forms/SkillForm.vue';

const props = defineProps<{
    skills?: Array<SkillsDTO> | null | undefined
}>();

const emits = defineEmits(['add:skill'])

function addSkill() {
    emits('add:skill');
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

.skills-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -12px -8px 0px;
    margin-bottom: 15px;
}
</style>