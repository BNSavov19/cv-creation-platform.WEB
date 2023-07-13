<template>
    <Template1></Template1>
</template>

<script lang="ts" setup> 
import router from '@/router';
import storageService from '@/services/storage-service';
import { onMounted } from 'vue';
import Template1 from '@/components/cv-templates/Template1.vue';

onMounted(()=>{
    if(!storageService.checkForUserLogin()) router.push({name:'login'});
})
</script>

<style lang="scss" scoped>
</style>