<template>
    <h1>Personal Details</h1>
    <div class="personal-details-form">
        <InputField 
            :vModel="form.FirstName"
            :type="'text'"
            :name="'FirstName'"
            :title="'First Name'"
            :updateCallback="(value: string)=>{form.FirstName = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.LastName"
            :type="'text'"
            :name="'LastName'"
            :title="'Last Name'"
            :updateCallback="(value: string)=>{form.LastName = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.Email"
            :type="'email'"
            :name="'Email'"
            :title="'Email'"
            :updateCallback="(value: string)=>{form.Email = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.Phone"
            :type="'text'"
            :name="'Phone'"
            :title="'Phone'"
            :updateCallback="(value: string)=>{form.Phone = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.Country"
            :type="'text'"
            :name="'Country'"
            :title="'Country'"
            :updateCallback="(value: string)=>{form.Country = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.City"
            :type="'text'"
            :name="'City'"
            :title="'City'"
            :updateCallback="(value: string)=>{form.City = value}"
            @update:value="onUpdateValue"/>

        <InputField 
            :vModel="form.Address"
            :type="'text'"
            :name="'Address'"
            :title="'Address'"
            :updateCallback="(value: string)=>{form.Address = value}"
            @update:value="onUpdateValue"/>
        
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { onUpdated, ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { PersonalInfoVM } from '@/api';

const props = defineProps<{
    personalInfoData: PersonalInfoVM | undefined | null,
}>()

const emits = defineEmits(['value:updated']);

let form = ref({
    FirstName: props.personalInfoData?.firstName,
    LastName: props.personalInfoData?.lastName,
    Email: props.personalInfoData?.email,
    Phone: props.personalInfoData?.phoneNumber,
    Country: '',
    City: '',
    Address: props.personalInfoData?.address,
});


function onUpdateValue()
{
    emits('value:updated', form.value);
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