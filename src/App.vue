<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
</script>

<template>
  <RouterView :key="router.currentRoute.value.fullPath"/>
</template>

<style scoped>
</style>
