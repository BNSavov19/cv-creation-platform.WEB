<template>
    <div class="site-wrapper">
        <header class="page-header">
            <h2 class="header-logo"><RouterLink :to="{path:'/'}"><span class="logo-text">Resu</span><span class="logo-suffix">.me</span></RouterLink></h2>
        </header>
        
        <div class="content-wrapper">
            <div class="side-bar">
                <div class="profile">
                    <div class="pic-and-username">
                        <img src="../assets/stock-images/stockimage1.jpg" alt="" class="profile-pic">
                        <h3 class="username">John Doe</h3>
                    </div>
                </div>

                <div class="navigation-tab">
                    <div class="navigation-buttons">
                        <button class="resumes-button" @click="activeComponent = Resumes">Resumes</button>
                        <button class="your-data-button" @click="activeComponent = PersonalDetailsForm">Your data</button>
                    </div>
                </div>
            </div>

            <div class="main-content">
                <component :is="activeComponent"></component>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup> 
import router from '@/router';
import storageService from '@/services/storage-service';
import { onMounted, ref } from 'vue';
import Resumes from './Resumes.vue';
import PersonalDetailsForm from '../components/forms/PersonalDetailsForm.vue'

const activeComponent = ref(Resumes);

onMounted(()=>{
    if(!storageService.checkForUserLogin()) router.push({name:'login'});
})

</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.site-wrapper {
    margin: -0.4rem;
    display: flex;
    flex-direction: column;
    min-height: 99vh;
    
    * {
        font-family: 'Manrope', sans-serif;
    }

    .content-wrapper {
        display: flex;
        flex-grow: 1;

        .side-bar {
            min-width: 30rem;
            border-right: 1px solid $border-color;

            .profile {
                height: 7rem;
                display: flex;
                border-bottom: 1px solid $border-color;

                .pic-and-username {
                    display: flex;
                    align-items: center;
                    margin-left: 1rem;
                    .profile-pic {
                        width: 5rem;
                        height: 5rem;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    .username {
                        margin-left: 2rem;
                        font-size: 1.6rem;
                        font-weight: 600;
                    }
                }
            }
            .navigation-tab {
                .navigation-buttons {
                    display: flex;
                    flex-direction: column;
                    margin: 4rem 0 0 2rem;

                    button {
                        background: transparent;
                        padding: 0.5rem 1rem;
                        margin-bottom: 1.5rem;
                        border: none;
                        border-radius: 1.5rem;
                        font-size: 1.75rem;
                        font-weight: 600;
                        width: 10rem;
                        color: #000; 
                        @include transition-ease;

                        &:hover {
                            color: $accent-color;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .main-content {
            flex-grow: 1;
            max-height: 76.5rem;
            overflow-y: auto;
            padding: 3rem 3rem 0 5rem;
        }
    }
}
</style>