<template>

<Swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :navigation="true"
    :loopAdditionalSlides="30"
    :modules="modules"
    class="templates-slider">

        <SwiperSlide v-for="template in props.templates" class="template" @click="emits('template:selected', template)">
            <img :src="`/src/assets/images/${template}.png`">
            <span>{{template}}</span>
        </SwiperSlide>
</Swiper>

</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import { Pagination, FreeMode } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const modules = [FreeMode];

const props = defineProps<{
    templates: Array<string>,
}>();

const emits = defineEmits(['template:selected']);
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';
.templates-slider {
    width: 100%;

    .swiper-slide {
        text-align: center;
        cursor: pointer;
        
        img {
            width: 300px;
            box-shadow: 0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;
            border: 1px solid #0000001a;
            border-radius: 6px;
        }

        span {
            font-family: 'Hanken Grotesk';
            color: black;
            font-weight: 600;
        }

    }
}
</style>
