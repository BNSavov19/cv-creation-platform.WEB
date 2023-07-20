<template>
    <h1 class="heading">Certifications</h1>
    <CertificateForm v-for="certificate in props.certificates" :certificateData="certificate" @deleted:certificate="onDeletedCertificate" @updated:value="onValueUpdate"/>
    <div class="add-certification-button" @click="addEducation">+ Add Certificate</div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import type { CertificateVM } from '@/api';
import certificateService from '@/services/certificate-service';
import CertificateForm from '../forms/CertificateForm.vue';

const props = defineProps<{
    certificates?: Array<CertificateVM> | null | undefined,
    resumeId?: string,
}>();

const emits = defineEmits(['value:updated'])

function addEducation() {
    certificateService.addCertificateToResume(props.resumeId!, {certificateName:'', issuingOrganization: '', issueDate: new Date()} as CertificateVM).then(()=>{
        emits('value:updated');
    })
}

function onValueUpdate(id: number, data: any) {
    certificateService.updateCertificate(id, data as CertificateVM).then(()=>{
        emits('value:updated');
    })
}

function onDeletedCertificate(id: number) {
    certificateService.deleteCertificate(id).then(()=>{
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

.add-certification-button {
    color: rgb(26, 145, 240);
    font-weight: 600;
    cursor: pointer;
}
</style>