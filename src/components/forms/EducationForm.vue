<template>
    <div class="employment-container">
        <div class="employment-heading" @click="active = !active">
            <span v-if="props.educationData.degree || props.educationData.instituteName">{{props.educationData.degree}} <span v-if="props.educationData.instituteName">at {{props.educationData.instituteName}}</span> </span>
            <span v-else>(Not specified)</span>

            <IconArrowDown v-if="active" class="arrow"/>
            <IconArrowUp v-else class="arrow"/>
        </div>
        <div v-if="active" class="employment-history-form">
            <InputField 
                :vModel="form.School"
                :type="'text'"
                :name="'School'"
                :title="'School'"/>
    
            <InputField 
                :vModel="form.Degree"
                :type="'text'"
                :name="'Degree'"
                :title="'Degree'"/>
    
            <InputField 
                :vModel="form.FieldOfStudy"
                :type="'text'"
                :name="'FieldOfStudy'"
                :title="'FieldOfStudy'"/>

            <InputField 
                :vModel="form.StartDate"
                :type="'date'"
                :name="'StartDate'"
                :title="'Start Date'"/>
    
            <InputField 
                :vModel="form.EndDate"
                :type="'date'"
                :name="'EndDate'"
                :title="'End Date'"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { EducationDTO, WorkExperienceDTO } from '@/api';
import IconArrowDown from '../icons/IconArrowDown.vue';
import IconArrowUp from '../icons/IconArrowUp.vue';

const props = defineProps<{
    educationData: EducationDTO,
}>()

const active: Ref<boolean> = ref(false);

let form = ref({
    School: props.educationData.instituteName,
    Degree: props.educationData.degree,
    FieldOfStudy: props.educationData.fieldOfStudy,
    StartDate: props.educationData.startDate,
    EndDate: props.educationData.endDate,
});

</script>

<style lang="scss" scoped>
@import '../../styles/imports.scss';
h1 {
    font-family: 'Gothic A1';
    font-size: 1.6rem;
    font-weight: 800;
    color: #1E2532;
    margin-bottom: 1rem; 
}

.employment-container {
    border: 1px solid rgb(231, 234, 244);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 15px 20px;
    margin-bottom: 15px;
    
    .employment-heading {
        width: 100%;
        padding: 15px 20px;
        padding-left: 0;
        cursor: pointer;
        transition: .1s;
        font-weight: 500;
        position: relative;

        .arrow {
            position: absolute;
            top: 35%;
            right: 0;
            fill: #9fa6bb;

        }
    }
    
    .employment-history-form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &:hover {
        .employment-heading {
            color: rgb(26, 145, 240);

            .arrow {
                fill: rgb(26, 145, 240);
            }
        }
    }
}
</style>