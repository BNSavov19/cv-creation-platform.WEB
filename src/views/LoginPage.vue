<template>
    <div class="site-wrapper">
        <header class="page-header">
            <h2 class="header-logo"><RouterLink :to="{path:'/'}"><span class="logo-text">Resu</span><span class="logo-suffix">.me</span></RouterLink></h2>
        </header>
        
        <div class="content-wrapper">
            <div class="sign-in-form-wrapper">
                <h1 class="form-title">Sign in</h1>
                <LoginForm @login:form:submitted="onLoginAttempt"></LoginForm>
            
                <span class="no-account-link">Don't have an account? <RouterLink :to="{path:'/auth/register'}"><span class="sign-up-button">Sign up</span></RouterLink></span>
            </div>
        </div>
    
        <footer class="page-footer">
            <p class="footer-text">&copy; 2023 Resu.me All rights reserved.</p>
        </footer>
    </div>
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
    @import '../css/login-page.scss';
</style>