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
import router from '@/router';
import authService from '@/services/authentication-service';
import storageService from '@/services/storage-service';
import { onMounted } from 'vue';

onMounted(()=>{
    if(storageService.checkForUserLogin()) router.push({name:'resumes'});
})

function onLoginAttempt(form: any)
{
    authService.makeLoginRequest(form.username, form.password).then((res) => {
        if(res.data.jwt && res.data.id)
        {
            storageService.saveToken(res.data.jwt);
            storageService.saveUserId(res.data.id);
            storageService.saveRefreshToken(res.data.refreshToken!);
            storageService.saveExpDate(res.data.refreshTokenExpirationDate!.toString());
        }
        if(storageService.checkForUserLogin()) router.push({name:'resumes'});
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

            .no-account-link {
                font-size: 1.2rem;
                color: $secondary-color;
                font-family: Hanken Grotesk;

                .sign-up-button {
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