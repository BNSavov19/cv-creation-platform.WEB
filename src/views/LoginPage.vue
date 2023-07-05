<template>
    <h1>Login</h1>
    <LoginForm @login:form:submitted="onLoginAttempt"></LoginForm>
    
    <span>Don't have an account? <RouterLink :to="{path:'/auth/register'}"><span class="sign-up-button">Sign up</span></RouterLink></span>
</template>

<script lang="ts" setup>
import LoginForm from '@/components/forms/LoginForm.vue' 
import userService from '@/services/user-service'

function onLoginAttempt(username: string, password: string)
{
    console.log('sending req', username, password);
    //userService.loginUser(username, password);
}
</script>

<style lang="scss" scoped>
.sign-up-button {
    text-decoration: underline;
    cursor: pointer;
}

</style>