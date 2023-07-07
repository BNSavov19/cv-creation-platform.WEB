<template>
    <form @submit.prevent="onFormSubmit">
        <input type="text" :class="{ 'error': vuelidate.username.$error }" :placeholder="vuelidate.username.$error ? vuelidate.username.$errors[0].$message as string : 'Username'" v-model="form.username">

        <input type="password" :class="{ 'error': vuelidate.password.$error }" :placeholder="vuelidate.password.$error ? vuelidate.password.$errors[0].$message as string : 'Password'" v-model="form.password">

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
@import '../../styles/reset.scss';

form {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    

    input, button {
        width: 23rem;
        height: 3rem;
        margin-bottom: 1.25rem;
        border: none;
        font-size: 1rem;
        border: 3px solid transparent;
        @include transition-ease;

        &:focus {
            border-color: $accent-color;
        }
    }

    input {
        background-color: $background-color;
        border-radius: 0.3rem;
        padding-left: 0.75rem;
        @include transition-ease;

        &::placeholder {
            color: $secondary-color;
        }
    }

    button {
        background-color: $accent-color;
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0px 14px 16px -3px rgba(42,131,254,0.19);
        cursor: pointer;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
    }

    .error {
        background-color: $error-background;


        &::placeholder {
            color: $error-text;
        }
    }
}
</style>