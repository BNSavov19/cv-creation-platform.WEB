<template>
    <div class="page-container">
        <div class="swiper-container">
            <Swiper
                :slidesPerView="3"
                :spaceBetween="30"
                :navigation="true"
                :loop="true"
                :centeredSlides="true"
                :loopAdditionalSlides="30"
                class="templates-slider"
                >
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
                </SwiperSlide>
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
                </SwiperSlide>
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
                </SwiperSlide>
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
                </SwiperSlide>
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
                </SwiperSlide>
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
                </SwiperSlide>
                <SwiperSlide class="template">
                    <img src="../assets/images/template1.png">
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
</script>

<style lang="scss" scoped>

.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    background-color: rgb(239, 242, 249);
    overflow: hidden;
    align-items: center;
    justify-content: center;
    .swiper-container {
        width: 100%;
        height: 50%;       
        .templates-slider {
            width: 100%;
            height: 100%;
            .swiper-slide {
                border-radius: 12px;
                width: 480px;
                transition: width .2s;
                
                img {
                    width: 100%;
                    border-radius: 12px;
                }
            }
            .swiper-slide-active {
                border: 6px solid rgb(26, 145, 240);
                box-shadow: rgba(186, 199, 227, 0.705) 0px 20px 40px -8px;
            }

            .swiper-slide-next {
                width: 480px;
            }
        }
    }
}


</style>