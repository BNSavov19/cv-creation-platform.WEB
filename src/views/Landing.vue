<template>
    <div class="site-wrapper">
        <header class="page-header">
            <h2 class="header-logo"><RouterLink :to="{path:'/'}"><span class="logo-text">Resu</span><span class="logo-suffix">.me</span></RouterLink></h2>
            <div class="buttons">
                <button class="login-button"><RouterLink :to="{path:'/auth/login/'}">Login</RouterLink></button> 
                <button class="signup-button"><RouterLink :to="{path:'/auth/register/'}">Sign up</RouterLink></button> 
            </div> 
        </header>

        <div class="content-wrapper">
            <div class="main-content">
                <h1 class="landing-title">Boost your chances of landing your dream job</h1>
                <p class="landing-description">Create eye catching resumes in minutes.</p>
                <div class="button-wrapper">
                    <button class="create-cv-button" @click="onCreateCVButtonClick">Create CV</button>
                </div>
            </div>

            <div class="resumes-wrapper">
                <div class="resumes up">
                    <div class="resumes-slide">
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                    </div>
                    <div class="resumes-slide">
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                    </div>
                </div>
                <div class="resumes down">
                    <div class="resumes-slide">
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                    </div>
                    <div class="resumes-slide">
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                    </div>
                </div>
                <div class="resumes up">
                    <div class="resumes-slide">
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                    </div>
                    <div class="resumes-slide">
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                        <div class="resume"></div>
                    </div>
                </div>
            </div>
        </div>
    
        <footer class="page-footer">
            <p class="footer-text">&copy; 2023 Resu.me All rights reserved.</p>
        </footer>
    </div>
</template>

<script lang="ts" setup> 
import router from '@/router';
import storageService from '@/services/storage-service';
import { onMounted } from 'vue';

onMounted(()=>{
    if(storageService.checkForUserLogin()) router.push({name:'resumes'});
})

function onCreateCVButtonClick()
{
    if(storageService.checkForUserLogin()) {
        router.push({name:'resumes'});
    }
    else {
        router.push({name:'login'});
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.site-wrapper {
    margin: -0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 99vh;
    overflow: hidden;

    .content-wrapper {
        display: flex;
        justify-content: flex-start;
        
        .main-content {
            padding: 3rem;
            border-radius: 3rem;
            margin: 0 5rem;
            z-index: 3;

            .landing-title {
                font-size: 3.5rem;
                max-width: 50rem;
                font-weight: 600;
                line-height: 1.3;
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
            }
    
            .landing-description {
                font-size: 1.5rem;
                margin: 1.5rem 0 3rem 0;
                color: $secondary-color;
            }
    
            .create-cv-button {
                outline: none;
                border: none;
                cursor: pointer;
                font-size: 1.10rem;
                font-weight: 600;
                font-family: 'Manrope';
                font-style: normal;
                color: white;
                box-shadow: 0px 14px 16px -3px rgba(42,131,254,0.19);
                background-color: $accent-color;
                padding: 1rem 2.8rem;
                border-radius: 1rem;
            }
        } 
        
        .resumes-wrapper {
            display: flex;
            position: fixed;
            top: -10%;
            left: 40%;
            rotate: 30deg;
            zoom: 1;
            
            .resumes {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                z-index: 1;

                &:nth-child(1) {
                    .resumes-slide {
                        .resume {
                            &:nth-child(1) {
                                background-image: url("../assets/stock-images/artdirector-cv-example-oak-2313782755.png");
                            }
    
                            &:nth-child(2) {
                                background-image: url("../assets/stock-images/creative_resume_template_thumbnail-3176182311.png");
                            }
    
                            &:nth-child(3) {
                                background-image: url("../assets/stock-images/Resume.png");
                            }
    
                            &:nth-child(4) {
                                background-image: url("../assets/stock-images/CV Template with Photo.png");
                            }
        
                            &:nth-child(5) {
                                background-image: url("../assets/stock-images/Jorge Ossa CV.png");
                                margin-bottom: 0rem;
                            }
                        }
                    }
                }

                &:nth-child(2) {
                    .resumes-slide {
                        .resume {
                            &:nth-child(5) {
                                background-image: url("../assets/stock-images/artdirector-cv-example-oak-2313782755.png");
                            }
    
                            &:nth-child(3) {
                                background-image: url("../assets/stock-images/creative_resume_template_thumbnail-3176182311.png");
                            }
    
                            &:nth-child(1) {
                                background-image: url("../assets/stock-images/Resume.png");
                            }
    
                            &:nth-child(2) {
                                background-image: url("../assets/stock-images/CV Template with Photo.png");
                            }
        
                            &:nth-child(4) {
                                background-image: url("../assets/stock-images/Jorge Ossa CV.png");
                                margin-bottom: 0rem;
                            }
                        }
                    }
                }

                &:nth-child(3) {
                    .resumes-slide {
                        .resume {
                            &:nth-child(4) {
                                background-image: url("../assets/stock-images/artdirector-cv-example-oak-2313782755.png");
                            }
    
                            &:nth-child(3) {
                                background-image: url("../assets/stock-images/creative_resume_template_thumbnail-3176182311.png");
                            }
    
                            &:nth-child(1) {
                                background-image: url("../assets/stock-images/Resume.png");
                            }
    
                            &:nth-child(5) {
                                background-image: url("../assets/stock-images/CV Template with Photo.png");
                            }
        
                            &:nth-child(2) {
                                background-image: url("../assets/stock-images/Jorge Ossa CV.png");
                                margin-bottom: 0rem;
                            }
                        }
                    }
                }
    
                .resumes-slide {
                    display: inline-block;

                    .resume {
                        height: 20rem;
                        width: 15rem;
                        pointer-events: none;
                        background-size: cover; 
                        background-position: center center; 
                        background-repeat: no-repeat;
                        border: 1px solid lightgray;
                        box-shadow: 0px 0px 15px 1px rgba(42,131,254,0.19);
                        border-radius: 1rem;
                        margin: 2rem 1rem;
                    }
                }
            }
        }

        .resumes.up {
            .resumes-slide {
                animation: 50s slide-up infinite linear;
            }
        }

        .resumes.down {
            transform: translateY(-100rem);
            .resumes-slide {
                animation: 50s slide-down infinite linear;
            }
        }

        @keyframes slide-up {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-100%);
            }
        }

        @keyframes slide-down {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(100%);
            }
        }
    }

    .page-footer {
        z-index: 2;
    }

    .page-header {
        z-index: 4;
    }
}

@media (max-width: 576px) and (orientation: portrait) {
    .site-wrapper {
        .content-wrapper {
            transform: scale(0.765);
            .main-content {
                margin: 0;
                text-align: center;
                background-color: white;
                box-shadow: 0px 0px 106px 16px rgba(41,130,254,0.2);
                .landing-title {
                    font-size: 2rem;
                }
            }

            .resumes-wrapper {
                visibility: hidden;
            }
        }
    }
}
</style>