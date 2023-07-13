<template>
    <div class="site-wrapper">
        <header class="page-header">
            <h2 class="header-logo"><RouterLink :to="{path:'/'}"><span class="logo-text">Resu</span><span class="logo-suffix">.me</span></RouterLink></h2>
        </header>
        
        <div class="content-wrapper">
            <div class="sign-in-form-wrapper">
                <h1 class="form-title">Sign up</h1>
                <RegisterForm @register:form:submitted="onRegisterAttempt"></RegisterForm>
            
                <span class="have-account-link">Already have an account? <RouterLink :to="{path:'/auth/login'}"><span class="sign-in-button">Sign in</span></RouterLink></span>
            </div>
        </div>
    
        <footer class="page-footer">
            <p class="footer-text">&copy; 2023 Resu.me All rights reserved.</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import RegisterForm from '@/components/forms/RegisterForm.vue' 
import router from '@/router';
import authService from '@/services/authentication-service';
import storageService from '@/services/storage-service';

function onRegisterAttempt(form: any)
{
    authService.makeRegisterRequest(form.username, form.password, form.password).then((res) => {
        authService.makeLoginRequest(form.username, form.password).then((res) => {
            if(res.data.jwt && res.data.id)
            {
                storageService.saveToken(res.data.jwt);
                storageService.saveUserId(res.data.id);
            }
            if(storageService.checkForUserLogin()) router.push({name:'dashboard'});
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    });
}
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 99vh;
    margin: -0.4rem;

    .content-wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .sign-in-form-wrapper {
            border-radius: 2rem;
            box-shadow: 0px 100px 193px -35px rgba(42, 131, 254, 0.25);
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

            .have-account-link {
                font-size: 1.2rem;
                color: $secondary-color;
                font-family: Hanken Grotesk;

                .sign-in-button {
                    color: $accent-color;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

@media (max-width: 576px) and (orientation: portrait) {
    .sign-in-form-wrapper {
        transform: scale(0.75);
        margin-bottom: 7rem;
    }
}

</style>