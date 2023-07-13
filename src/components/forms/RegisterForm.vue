<template>
    <form @submit.prevent="onFormSubmit">
        <div class="input-wrapper">
            <input type="text" placeholder="Username" v-model="form.username" />
            <span class="error" v-if="vuelidate.username.$error">{{ vuelidate.username.$errors[0].$message }}</span>
        </div>
        
        <div class="input-wrapper">
            <input type="text" placeholder="Email" v-model="form.email" />
            <span class="error" v-if="vuelidate.email.$error">{{ vuelidate.email.$errors[0].$message }}</span>
        </div>

        <div class="input-wrapper">
            <input type="text" placeholder="Password" v-model="form.password" />
            <span class="error" v-if="vuelidate.password.$error">{{ vuelidate.password.$errors[0].$message }}</span>
        </div>

        <button type="submit">Sign up</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const emits = defineEmits(['register:form:submitted'])

let form = ref({
    username: '',
    email: '',
    password: '',
});

const rules = {
    username: {
        required: helpers.withMessage('Please enter a username.', required),
        minLength: helpers.withMessage('Username must be at least 3 characters long.', minLength(3))
    },
    email: {
        required: helpers.withMessage('Please enter an email.', required),
        email: helpers.withMessage('Please enter a valid email.', email)
    },
    password: {
        required: helpers.withMessage('Please enter a password.', required),
        minLength: helpers.withMessage('Password must be at least 8 characters long.', minLength(8))
    },
}

const vuelidate = useVuelidate(rules, form);

async function onFormSubmit() {
    const isValid = await vuelidate.value.$validate();
    
    if (!isValid) {
        return;
    }

    emits('register:form:submitted', form.value);
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

        &:hover {
            background-color: $dark-accent-color;
        }
    }

    .error {
        position: absolute;
        background-color: $error-background;
        color: $error-text;
        width: 22rem;
        height: 3rem;
        border-radius: 0.3rem;
        box-shadow: 0px 14px 16px -3px rgba(235, 163, 163, 0.2);
        text-align: start;
        margin-left: 2rem;
        padding: 0.7rem 0.75rem 0;
        opacity: 0;
        animation: fade-in 0.3s ease-in-out forwards;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}

@media (max-width: 576px) and (orientation: portrait) {
    .input-wrapper {
        display: flex;
        flex-direction: column;

        .error {
            margin: 25rem auto;
            width: 23rem;
        }
    }
}
</style>
