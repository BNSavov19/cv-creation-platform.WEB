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
                :vModel="form.instituteName"
                :type="'text'"
                :name="'School'"
                :title="'School'"
                :updateCallback="(value: string)=>{form.instituteName = value}"
                @update:value="onUpdateValue"/>
    
            <InputField 
                :vModel="form.degree"
                :type="'text'"
                :name="'Degree'"
                :title="'Degree'"
                :updateCallback="(value: string)=>{form.degree = value}"
                @update:value="onUpdateValue"/>
    
            <InputField 
                :vModel="form.fieldOfStudy"
                :type="'text'"
                :name="'FieldOfStudy'"
                :title="'FieldOfStudy'"
                :updateCallback="(value: string)=>{form.fieldOfStudy = value}"
                @update:value="onUpdateValue"/>

            <InputField 
                :vModel="form.startDate"
                :type="'date'"
                :name="'StartDate'"
                :title="'Start Date'"
                :updateCallback="(value: string)=>{form.startDate = value}"
                @update:value="onUpdateValue"/>
    
            <InputField 
                :vModel="form.endDate"
                :type="'date'"
                :name="'EndDate'"
                :title="'End Date'"
                :updateCallback="(value: string)=>{form.endDate = value}"
                @update:value="onUpdateValue"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { EducationVM } from '@/api';
import IconArrowDown from '../icons/IconArrowDown.vue';
import IconArrowUp from '../icons/IconArrowUp.vue';

const props = defineProps<{
    educationData: EducationVM,
}>();

const emits = defineEmits(['updated:value']);

const active: Ref<boolean> = ref(false);

let form = ref({
    instituteName: props.educationData.instituteName,
    degree: props.educationData.degree,
    fieldOfStudy: props.educationData.fieldOfStudy,
    startDate: props.educationData.startDate,
    endDate: props.educationData.endDate,
});

function onUpdateValue()
{
    emits('updated:value', props.educationData.id, form.value);
}

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
        column-gap: 3rem;
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