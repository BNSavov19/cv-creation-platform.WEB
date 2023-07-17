<template>
    <div class="resumes-wrapper">
        <div class="title-and-create-cv">
            <h2 class="section-title">Resumes</h2>
            <button class="create-cv"><RouterLink :to="{path:'/resumes/create/templates'}">Create</RouterLink></button>
        </div>

        <div class="resumes-grid" ref="previewSection">
            <div v-for="resume in resumes" class="resume-preview" ref="resumePreview" @click="router.push({name:'editor', params:{id:resume.id}})">
                <Resume :resumeData="resume" class="resume"/>
                <h1 class="resume-title">{{ resume.title }}</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ResumeDTO } from '@/api';
import Resume from '@/components/Resume.vue';
import { onMounted, ref, type Ref} from 'vue'
import { useElementSize, useResizeObserver } from '@vueuse/core'
import router from '@/router';

const props = defineProps<{
    resumes: Array<ResumeDTO>,
}>()

let resumePreviewScale: Ref<number> = ref(0.5);
let resumePreview = ref(), previewSection = ref();
let resumePreviewElement = useElementSize(resumePreview);
let previewSectionElement = useElementSize(previewSection);

onMounted(() => {
    resumePreviewScale.value = Math.min(previewSectionElement.width.value / resumePreviewElement.width.value, previewSectionElement.height.value / resumePreviewElement.height.value - 0.1);
    useResizeObserver(previewSection, (entries)=>{
        const entry = entries[0];
        const {width, height} = entry.contentRect;
        resumePreviewScale.value = Math.min(width / resumePreviewElement.width.value, height / resumePreviewElement.height.value -0.1);
        console.log(resumePreviewElement.height.value, resumePreviewElement.width.value);
    })

    console.log(props.resumes);
})


</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.resumes-wrapper {
    width: 100%;
    overflow-y: auto;
    .title-and-create-cv {
        display: flex;
        justify-content: space-between;
        .section-title {
            font-size: 3rem;
            margin-bottom: 4rem;
            font-weight: 600;
        }
    
        .create-cv {
            width: 10rem;
            height: 3.5rem;
            margin-right: 5rem;
            background-color: $accent-color;
            border: none;
            border-radius: 1.25rem;
            box-shadow: 0px 14px 16px -3px rgba(42,131,254,0.19);
            @include transition-ease;
    
            &:hover {
                background-color: $dark-accent-color;
                cursor: pointer;
            }
    
            a {
                color: white;
                font-size: 1rem;
            }
        }
    }
    .resumes-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    
        .resume-preview {
            transform-origin: top left;
            transform: scale(0.7);
            width: fit-content;
            height: fit-content;
            cursor: pointer;
            .resume {
                border: 1px solid #C9C9C9;
                margin-bottom: 1rem;
            }
            border-radius: 6px;
        }
    }
}
</style>