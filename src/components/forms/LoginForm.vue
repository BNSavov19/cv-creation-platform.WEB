<template>
    <form @submit.prevent="onFormSubmit">
        <input type="text" placeholder="Username" v-model="form.username">
        <span v-if="vuelidate.username.$error">{{vuelidate.username.$errors[0].$message}}</span>

        <input type="password" placeholder="password" v-model="form.password">
        <span v-if="vuelidate.password.$error">{{vuelidate.password.$errors[0].$message}}</span>

        <button type="submit">Login</button>
    </form>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength} from '@vuelidate/validators'

const emits = defineEmits(['login:form:submitted'])

let form = ref({
    username: '',
    password: '',
});

const rules = {
    username: {
        required: helpers.withMessage('username is required', required)
    },
    password: {
        required: helpers.withMessage('password is required', required),
        password: helpers.withMessage('password must be at least 8 characters', minLength(8))
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
</style>