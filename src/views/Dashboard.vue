<template>
    <div class="site-wrapper">
        <Navbar/>
        
        <div class="content-wrapper">
            <div class="side-bar">
                <div class="profile">
                    <div class="pic-and-username">
                        <img src="../assets/stock-images/user.png" alt="" class="profile-pic">
                        <h3 class="username">John Doe</h3>
                        <span class="logout-button" @click="logout">Logout</span>
                    </div>
                </div>

                <div class="navigation-tab">
                    <div class="navigation-buttons">
                        <button class="resumes-button">Resumes</button>
                        <button class="your-data-button">Your data</button>
                    </div>
                </div>
            </div>

            <div class="main-content">
                <Resumes :resumes="resumes"></Resumes>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup> 
import router from '@/router';
import storageService from '@/services/storage-service';
import { onMounted, ref, type Ref } from 'vue';
import Resumes from './Resumes.vue';
import type { ResumeVM } from '@/api';
import resumeService from '@/services/resume-service';
import Navbar from '@/components/Navbar.vue';
import {
    LOCAL_STORAGE_TOKEN_KEY,
    LOCAL_STORAGE_USER_ID_KEY
} from '@/shared/constants'


const activeComponent = ref(Resumes);

const resumes: Ref<ResumeVM[]> = ref([]);

onMounted(async ()=>{
    if(!storageService.checkForUserLogin()) router.push({name:'login'});

    resumeService.getAllResumes(storageService.retrieveUserId()!).then((res)=>{
        resumes.value = res.data;
        console.log(resumes.value);
    });
})

function logout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_USER_ID_KEY);

    router.push({name:'login'});
}

</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.site-wrapper {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    
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

                    .logout-button {   
                        margin-left: 9rem;
                        background-color: rgb(215, 215, 215);
                        color: #2c2c2c;
                        font-size: 1rem;
                        font-weight: 600;
                        padding: 5px 10px;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                        cursor: pointer;

                        &:hover {
                            background-color: $accent-color;
                            color: white;
                        }
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
            padding: 2rem
        }
    }
}
</style>