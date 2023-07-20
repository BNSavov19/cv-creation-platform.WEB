<template>
    <div class="page-container">
        <div class="swiper-container">
            <Swiper
                :slidesPerView="3"
                :spaceBetween="30"
                :navigation="true"
                :centeredSlides="true"
                :loopAdditionalSlides="30"
                class="templates-slider"
                >
                <SwiperSlide v-for='template in templates' class="template">
                    
                    <h1>{{template}}</h1>
                    <div class="img-container">
                        <div class="overlay">
                            <button @click="onTemplateChoice(template)">Choose Template</button>
                        </div>
                        
                        <img :src="`../../src/assets/images/${template}.png`">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import { Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import resumeService from '@/services/resume-service';
import storageService from '@/services/storage-service';
import type { PersonalInfoVM } from '@/api';
import router from '@/router';

function onTemplateChoice(template: string)
{
    resumeService.createResume(storageService.retrieveUserId()!, '',  {} as PersonalInfoVM, undefined, '', '', new Date().toISOString(), new Date().toISOString(), template).then((res)=> {
        router.push({name: 'editor', params:{id:res.data.split(' ')[2]}});
    });
}

const templates: Array<string> = ['Washington', 'Moscow', 'template2', 'template3']
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    background-color: rgb(239, 242, 249);
    overflow: visible;
    align-items: center;
    justify-content: center;
    .swiper-container {
        width: 100%;
        height: 50%;       
        .templates-slider {
            width: 100%;
            height: 100%;
            .swiper-slide {
                opacity: .6;
                border-radius: 12px;
                width: 480px;
                transition: width .2s;
                text-align: center;
                overflow: visible;

                .img-container {
                    width: inherit;
                    height: inherit;
                    position: relative;
                    img {
                        width:85%;
                        border-radius: 12px;
                    }

                    .overlay {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        
                        button {
                            background: #2A83FE;
                            border: none;
                            padding: .8rem 2rem;
                            border-radius: 34px;
                            color: white;
                            font-family: 'Manrope';
                            font-size: 1rem;
                            visibility:hidden;
                            cursor: pointer;
                            
                            &:hover {
                                background: #1b69d6;
                            }
                        }
                    }
                }
                
                
                h1 {
                    margin-bottom: 1rem;
                }
            }
            
            .swiper-slide-active {
                opacity: 1;
                .img-container {
                    img {      
                        border: 6px solid rgb(26, 145, 240);
                        box-shadow: rgba(186, 199, 227, 0.705) 0px 20px 40px -8px;
                    }
                    
                    .overlay {
                        button {
                            visibility: visible;
                        }
                    }
                }
            }

            .swiper-slide-next {
                width: 480px;
            }
        }
    }
}


</style>