<template>
    <h1>Dashboard</h1>
</template>

<script lang="ts" setup> 
import router from '@/router';
import storageService from '@/services/storage-service';
import { onMounted } from 'vue';

onMounted(()=>{
    if(!storageService.checkForUserLogin()) router.push({name:'login'});
})
</script>

<style lang="scss" scoped>
</style>