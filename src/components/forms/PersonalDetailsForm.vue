<template>
    <h1>Personal Details</h1>
    <div class="personal-details-form">
        <InputField 
            :vModel="form.FirstName"
            :type="'text'"
            :name="'FirstName'"
            :title="'First Name'"/>

        <InputField 
            :vModel="form.LastName"
            :type="'text'"
            :name="'LastName'"
            :title="'Last Name'"/>

        <InputField 
            :vModel="form.Email"
            :type="'email'"
            :name="'Email'"
            :title="'Email'"/>

        <InputField 
            :vModel="form.Phone"
            :type="'text'"
            :name="'Phone'"
            :title="'Phone'"/>

        <InputField 
            :vModel="form.Country"
            :type="'text'"
            :name="'Country'"
            :title="'Country'"/>

        <InputField 
            :vModel="form.City"
            :type="'text'"
            :name="'City'"
            :title="'City'"/>

        <InputField 
            :vModel="form.Address"
            :type="'text'"
            :name="'Address'"
            :title="'Address'"/>
        
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { PersonalInfoDTO } from '@/api';

const props = defineProps<{
    personalInfoData?: PersonalInfoDTO
}>()

let form = ref({
    FirstName: ' ',
    LastName: '',
    Email: '',
    Phone: '',
    Country: '',
    City: '',
    Address: '',
});

console.log(props.personalInfoData);

const rules = {
    username: {
        required: helpers.withMessage('Please enter a username.', required)
    },
    password: {
        required: helpers.withMessage('Please enter a password.', required)
    }
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

    margin-bottom: 3rem;

}
</style>