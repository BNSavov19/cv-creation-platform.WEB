<template>
    <div class="title-and-create-cv">
        <h2 class="section-title">Resumes</h2>
        <button class="create-cv"><RouterLink :to="{path:'/resumes/create/templates'}">Create</RouterLink></button>
    </div>
    <ul type="none" class="resumes-grid">
        <li><Template1 class="resume"></Template1></li>
        <li><Template2 class="resume"></Template2></li>
        <li><Template3 class="resume"></Template3></li>
        <li><Template1 class="resume"></Template1></li>
    </ul>
</template>

<script lang="ts" setup>
import Template1 from '@/components/cv-templates/Template1.vue';
import Template2 from '@/components/cv-templates/Template2.vue';
import Template3 from '@/components/cv-templates/Template3.vue';
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

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
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .resume {
        transform: scale(0.45);
        margin: -25rem -20.5rem;
        border: 3px solid $border-color;
    }
}
</style>