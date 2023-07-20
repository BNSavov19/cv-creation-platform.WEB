<template>
    <div class="employment-wrapper">

        <div class="employment-container">
            <div class="employment-heading" @click="active = !active">
                <span v-if="props.workExperienceData.position || props.workExperienceData.companyName">{{props.workExperienceData.position}} <span v-if="props.workExperienceData.companyName">at {{props.workExperienceData.companyName}}</span> </span>
                <span v-else>(Not specified)</span>
    
                <IconArrowDown v-if="active == false" class="arrow"/>
                <IconArrowUp v-else class="arrow"/>
                <IconDelete class="delete-icon" @click="emits('deleted:employment', props.workExperienceData.id)"/>
            </div>
            <div v-if="active" class="employment-history-form">
                <div class="grid-container">
                    <InputField 
                        :vModel="form.position"
                        :type="'text'"
                        :name="'JobTitle'"
                        :title="'Job title'"
                        :updateCallback="(value: string)=>{form.position = value}"
                        @update:value="onUpdateValue" />
            
                    <InputField 
                        :vModel="form.companyName"
                        :type="'text'"
                        :name="'Employer'"
                        :title="'Employer'"
                        :updateCallback="(value: string)=>{form.companyName = value}"
                        @update:value="onUpdateValue" />
        
                    <div class="dates-container">
                        <InputField 
                            :vModel="form.startDate"
                            :type="'date'"
                            :name="'StartDate'"
                            :title="'Start Date'"
                            class="start-date"
                            :updateCallback="(value: Date)=>{form.startDate = value}"
                            @update:value="onUpdateValue" />
                
                        <InputField 
                            :vModel="form.endDate"
                            :type="'date'"
                            :name="'EndDate'"
                            :title="'End Date'"
                            class="end-date"
                            :updateCallback="(value: Date)=>{form.endDate = value}"
                            @update:value="onUpdateValue" />
                    </div>
            
            
                    <InputField 
                        :vModel="form.City"
                        :type="'text'"
                        :name="'City'"
                        :title="'City'"
                        :updateCallback="(value: string)=>{form.City = value}"
                        @update:value="onUpdateValue" />
                </div>
        
                <TextAreaField 
                    :vModel="form.description"
                    :type="'text'"
                    :name="'Description'"
                    :title="'Description'"
                    class="description"
                    :updateCallback="(value: string)=>{form.description = value}"
                    @update:value="onUpdateValue" />
            </div>
    
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { WorkExperienceVM } from '@/api';
import IconArrowDown from '../icons/IconArrowDown.vue';
import IconArrowUp from '../icons/IconArrowUp.vue';
import IconDelete from '../icons/IconDelete.vue';
import TextAreaField from '../TextAreaField.vue';

const props = defineProps<{
    workExperienceData: WorkExperienceVM,
}>();

const emits = defineEmits(['updated:value', 'deleted:employment']);

const active: Ref<boolean> = ref(false);

let form = ref({
    position: props.workExperienceData.position,
    companyName: props.workExperienceData.companyName,
    startDate: props.workExperienceData.startDate,
    endDate: props.workExperienceData.endDate,
    City: '',
    description: props.workExperienceData.description,
});

function onUpdateValue()
{
    emits('updated:value', props.workExperienceData.id, form.value);
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
    position: relative;
    
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

        .delete-icon {
            position: absolute;
            top: 38%;
            right: -3.5rem;
            fill: #9fa6bb;
            opacity: 0;
            transition: opacity .1s;
            cursor: pointer;
            display: block;

            &:before {
                content: "";
                position: absolute;
                inset: -8px;
            }

            &:hover {
                fill: rgb(26, 145, 240);
                display: block;
                opacity: 1;
            }
        }

        &:hover {
            .delete-icon {
                display: block;
                opacity: 1;
            }
        }
    }
    
    .employment-history-form {
        width: 100%;

        .grid-container {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 3rem;
            .dates-container {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
    
                .start-date {
                    margin-right: 8px;
                    
                    .input-container {
                        .input-wrapper {
                            flex: 1 1 0%;
                            display: flex;
                            align-items: flex-end;
                        }
                    }
                }
    
                .end-date {
                    .input-container {
                        .input-wrapper {
                            flex: 1 1 0%;
                            display: flex;
                            align-items: flex-end;
                        }
                    }
                }
            }
        }
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