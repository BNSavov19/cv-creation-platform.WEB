<template>
    <form @submit.prevent="onFormSubmit">
        <input type="text" :class="{ 'error': vuelidate.username.$error }" :placeholder="vuelidate.username.$error ? vuelidate.username.$errors[0].$message : 'Username'" v-model="form.username">

        <input type="password" :class="{ 'error': vuelidate.password.$error }" :placeholder="vuelidate.password.$error ? vuelidate.password.$errors[0].$message : 'Password'" v-model="form.password">

        <button type="submit">Sign in</button>
    </form>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'

const emits = defineEmits(['login:form:submitted'])

let form = ref({
    username: '',
    password: '',
});

const rules = {
    username: {
        required: helpers.withMessage('Please enter a username.', required)
    },
    password: {
        required: helpers.withMessage('Please enter a password.', required)
    }
}

const vuelidate = useVuelidate(rules, form);

async function onFormSubmit()
{
    const isValid = await vuelidate.value.$validate();
    
    if(!isValid)
        return;

    emits('login:form:submitted', form.value);
    vuelidate.value.$reset();
}

</script>

<style lang="scss" scoped>
    @import '../../css/login-form.scss';
</style>