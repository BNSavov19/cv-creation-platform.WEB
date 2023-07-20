<template>
    <h1 class="heading">Skills</h1>

    <h1 class="suggestions-heading">Ai Generated Suggestions:</h1>
    <div class="suggestions-container">
        <div class="skill" v-for="skill in props.recommendedSkills.filter((element, index, array) => array.indexOf(element) === index ).slice(0, 10)" @click="onRecommendationClick(skill)">{{skill}}</div>
    </div>

    <div class="skills-forms-container">
        <SkillForm v-for="skill in props.skills" :skill="skill" @updated:value="onEditSkill" @deleted:skill="onDeleteSkill"/>
    </div>
    <div class="add-skill-button" @click="addSkill">+ Add skill</div>
</template>

<script lang="ts" setup>
import type { SkillVM } from '@/api';
import SkillForm from '../forms/SkillForm.vue';
import skillService from '@/services/skill-service';
import recommendationService from '@/services/recommendation-service';

const props = defineProps<{
    skills?: Array<SkillVM> | null | undefined
    resumeId?: string,
    recommendedSkills: Array<string>,
}>();

const emits = defineEmits(['add:skill', 'updated:value']);

function onRecommendationClick(recommendation: string) {
    skillService.addSkillToResume(props.resumeId!, {skillName: recommendation}).then(()=>{
        emits('updated:value');
    });
}

function onEditSkill(id: number, data: any) {
    skillService.updateSkill(id, data as SkillVM).then(()=>{
        emits('updated:value');
    })
}

function addSkill() {
    skillService.addSkillToResume(props.resumeId!, {skillName: ''}).then(()=>{
        emits('updated:value');
    });
}

function onDeleteSkill(id: number) {
    skillService.deleteSkill(id).then(()=>{
        emits('updated:value');
    })
}
</script>

<style lang="scss" scoped>
@import '../../styles/imports.scss';


.suggestions-heading {
    font-size: 1rem;
    color: rgb(92, 181, 255);
    margin-bottom: 1rem;
    font-weight: 600;
}
.heading {
    font-family: 'Gothic A1';
    font-size: 1.6rem;
    font-weight: 800;
    color: #1E2532;
    margin-bottom: 1rem; 
}

.add-skill-button {
    color: rgb(26, 145, 240);
    font-weight: 600;
    cursor: pointer;
}

.suggestions-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -12px -8px 0px;
    margin-bottom: 15px;

    .skill {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin: 0px 12px 12px 0px;
        padding: 6px 6px 6px 10px;
        border-radius: 4px;
        background-color: rgb(239, 242, 249);
        color: rgb(30, 37, 50);
        font-size: 16px;
        line-height: 20px;
        white-space: nowrap;
        transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
        will-change: opacity, transform;
        cursor: pointer;

        &:hover {
            background-color: rgb(234, 246, 255);
            color: rgb(26, 145, 240);
        }
    }
}
</style>