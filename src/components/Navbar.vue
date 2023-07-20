<template>
<nav class="navbar">
    <div class="left-section">
        <h2 class="logo"><RouterLink :to="{path:'/'}"><span class="logo-text">Resu</span><span class="logo-suffix">.me</span></RouterLink></h2>
        <span v-if="resumeTitle" class="route"> <span class="home-link" @click="onHomeButtonClick">Home</span> <IconArrowRight/> <span class="resume-title">{{resumeTitle}}</span></span>
    </div>

    <div v-if="resumeTitle" class="right-section">
        <button class="share-button" @click="emits('share:selected')"> <IconShare class="share-icon"/>  <span>Share</span></button>
        <button class="export-button" @click="emits('export:selected')"><IconExport class="export-icon"/> <span>Export</span></button>
    </div>
</nav>
</template>

<script lang="ts" setup>
import router from '@/router';
import IconArrowRight from './icons/IconArrowRight.vue';
import IconExport from './icons/IconExport.vue'
import IconShare from './icons/IconShare.vue'

const props = defineProps<{
    resumeTitle?: string;
}>();

const emits = defineEmits(['export:selected', 'share:selected']);

function onHomeButtonClick() {
    router.push({name:'resumes'});
}
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #E7E9ED;
    background: rgba(255, 255, 255, 0.51);
    backdrop-filter: blur(13px);
    z-index: 4;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    padding: 0rem 2rem;

    .left-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        .logo {
            font-weight: 600;
            margin: auto 1rem;
    
            a {
                text-decoration: none;
            }
    
            .logo-text {
                color: #000000;
            }
    
            .logo-suffix {
                color: #2A83FE;
            }
        }

        .route {
            display: flex;
            align-items: center;
            margin-left: 2rem;
            color: #9896A4;
            font-family: 'Manrope';
            font-size: .8rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.36px;

            .home-link {
                cursor: pointer;

                &:hover {
                    background-position: 0% 90%;
                    background-size: 100% 1px;
                    text-decoration: underline;
                }
            }

            .resume-title {
                color: #000;
                font-family: Manrope;
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.36px;
            }
        }

    }


    .right-section {

        .share-button {
            border-radius: 34.756px;
            border: 2px solid #E7E7E7;
            padding: .7rem 2rem;
            background: white;
            font-family: 'Hanken Grotesk';
            font-weight: 500;
            color: black;
            cursor: pointer;
            transition: border .2s;
            
            .share-icon {
                vertical-align: middle;
                
            }
            
            &:hover {
                border: 2px solid #2A83FE;
            }
        }
        .export-button {
            background: #2A83FE;
            border: none;
            padding: .8rem 2rem;
            border-radius: 34px;
            color: white;
            font-family: 'Hanken Grotesk';
            font-weight: 500;
            box-shadow: 0px 4px 13px -1px rgba(42, 131, 254, 0.33);
            cursor: pointer;
            margin-left: 1rem;
            transition: background-color .2s;
            text-align: center;

            &:hover {
                background: #1b69d6;
            }

            .export-icon {
                vertical-align: middle;
            }
        }
    }
}

@media (max-width: 576px) and (orientation: portrait) {
    .page-header {
        height: 3rem;

        .header-logo {
            font-size: 1.2rem;
        }

        .buttons {
            transform: scale(0.8);
            margin-right: 0rem;

            .login-button, .signup-button {
                padding: 0.3rem 1rem;
                width: 6rem;
            }
        }
    }
}
</style>