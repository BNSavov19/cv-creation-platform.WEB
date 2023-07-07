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
@import '../styles/imports.scss';

.site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content-wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        .sign-in-form-wrapper {
            border-radius: 2rem;
            box-shadow: 0px 100px 193px -35px rgba(42, 131, 254, 0.15);
            text-align: center;
            padding: 4rem;

            .form-title {
                margin-bottom: 4rem;
                font-size: 3rem;
                font-family: 'Hanken Grotesk';
                font-style: normal;
                font-weight: 800;
                color: #1C1C1C;
            }

            .no-account-link {
                font-size: 1.2rem;
                color: $secondary-color;
                font-family: Hanken Grotesk;

                .sign-up-button {
                    color: $accent-color;
                    text-decoration: underline;
                }
            }
        }
    }
}

</style>