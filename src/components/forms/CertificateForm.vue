<template>
    <div class="certificate-container">
        <div class="certificate-heading" @click="active = !active">
            <span v-if="props.certificateData.certificateName || props.certificateData.certificateName">{{props.certificateData.certificateName}} <span v-if="props.certificateData.issuingOrganization">, {{props.certificateData.issuingOrganization}}</span> </span>
            <span v-else>(Not specified)</span>

            <IconArrowDown v-if="active" class="arrow"/>
            <IconArrowUp v-else class="arrow"/>
            <IconDelete class="delete-icon" @click="emits('deleted:certificate', props.certificateData.id)"/>
        </div>
        <div v-if="active" class="certificate-form">    
            <InputField 
                :vModel="form.certificateName"
                :type="'text'"
                :name="'Name'"
                :title="'Name'"
                :updateCallback="(value: string)=>{form.certificateName = value}"
                @update:value="onUpdateValue"/>
    
            <InputField 
                :vModel="form.issuingOrganization"
                :type="'text'"
                :name="'Issuing Organization'"
                :title="'Issuing Organization'"
                :updateCallback="(value: string)=>{form.issuingOrganization = value}"
                @update:value="onUpdateValue"/>

            <InputField 
                :vModel="form.issueDate"
                :type="'date'"
                :name="'StartDate'"
                :title="'Start Date'"
                :updateCallback="(value: any)=>{form.issueDate = value}"
                @update:value="onUpdateValue"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { CertificateVM } from '@/api';
import IconArrowDown from '../icons/IconArrowDown.vue';
import IconArrowUp from '../icons/IconArrowUp.vue';
import IconDelete from '../icons/IconDelete.vue';

const props = defineProps<{
    certificateData: CertificateVM,
}>();

const emits = defineEmits(['updated:value', 'deleted:certificate']);

const active: Ref<boolean> = ref(false);

let form = ref({
    certificateName: props.certificateData.certificateName,
    issuingOrganization: props.certificateData.issuingOrganization,
    issueDate: props.certificateData.issueDate,
});

function onUpdateValue()
{
    emits('updated:value', props.certificateData.id, form.value);
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

.certificate-container {
    border: 1px solid rgb(231, 234, 244);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 15px 20px;
    margin-bottom: 15px;
    
    .certificate-heading {
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
            right: -3.5rem;;
            fill: #9fa6bb;
            opacity: 0;
            transition: opacity .1s;
            cursor: pointer;

            &:before {
                content: "";
                position: absolute;
                inset: -8px;
            }

            &:hover {
                fill: rgb(26, 145, 240);
            }
        }

        &:hover {
            .delete-icon {
                opacity: 1;
            }
        }
    }
    
    .certificate-form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 3rem;
    }

    &:hover {
        .certificate-heading {
            color: rgb(26, 145, 240);

            .arrow {
                fill: rgb(26, 145, 240);
            }
        }
    }
}
</style>