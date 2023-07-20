<template>
    <h1>Personal Details</h1>
    <div class="personal-details-form">

        <file-pond
            class="file-upload"
            name="GalleryImages"
            ref="pond"
            label-idle="Profile picture"
            v-bind:allow-multiple="false"
            accepted-file-types="image/webp"
            v-bind:files="ProfilePic"
            @updatefiles="getProfilePic"/>

        <InputField 
            :vModel="form.firstName"
            :type="'text'"
            :name="'FirstName'"
            :title="'First Name'"
            :updateCallback="(value: string)=>{form.firstName = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.lastName"
            :type="'text'"
            :name="'LastName'"
            :title="'Last Name'"
            :updateCallback="(value: string)=>{form.lastName = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.email"
            :type="'email'"
            :name="'Email'"
            :title="'Email'"
            :updateCallback="(value: string)=>{form.email = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.phoneNumber"
            :type="'text'"
            :name="'Phone'"
            :title="'Phone'"
            :updateCallback="(value: string)=>{form.phoneNumber = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.address"
            :type="'text'"
            :name="'Address'"
            :title="'Address'"
            :updateCallback="(value: string)=>{form.address = value}"
            @update:value="onUpdateValue"/>
        
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { onUpdated, ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { PersonalInfoVM } from '@/api';
import resumeService from '@/services/resume-service';
import storageService from '@/services/storage-service';
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'

const props = defineProps<{
    personalInfoData: PersonalInfoVM | undefined | null,
    resumeId?: string,
    resumeCreationDate?: Date,
    templateName?: string,
}>()

const emits = defineEmits(['value:updated']);

let form = ref({
    firstName: props.personalInfoData?.firstName,
    lastName: props.personalInfoData?.lastName,
    email: props.personalInfoData?.email,
    phoneNumber: props.personalInfoData?.phoneNumber,
    address: props.personalInfoData?.address,
});

const FilePond = vueFilePond();
let ProfilePic: any[] = [];
let ProfilePicBlob: Ref<Blob> = ref(new Blob);

function getProfilePic(e: any)
{
    ProfilePic = e;
    ProfilePicBlob.value = e[0].file;
    resumeService.updateResume(props.resumeId!, storageService.retrieveUserId()!, '', props.resumeCreationDate!, form.value as PersonalInfoVM, ProfilePicBlob.value, '', '', props.resumeCreationDate!, props.resumeCreationDate!, props.templateName!).then(()=>{
        emits('value:updated', form.value);
    });
}

function onUpdateValue()
{
    resumeService.updateResume(props.resumeId!, storageService.retrieveUserId()!, '', props.resumeCreationDate!, form.value as PersonalInfoVM, ProfilePicBlob.value, '', '', props.resumeCreationDate!, props.resumeCreationDate!, props.templateName!).then(()=>{
        emits('value:updated', form.value);
    });
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
.personal-details-form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
}
</style>