<template>
    <div class="site-wrapper">
        <header class="page-header">
            <h2 class="header-logo"><RouterLink :to="{path:'/'}"><span class="logo-text">Resu</span><span class="logo-suffix">.me</span></RouterLink></h2>
        </header>

        <div class="content-wrapper">
            <div class="main-content">
                <h1 class="dashboard-title">Boost your chances of landing your dream job</h1>
                <p class="dashboard-description">Create eye catching resumes in minutes.</p>
                <a class="create-cv-button" href="#">Create CV</a>
            </div>
        </div>
    
        <footer class="page-footer">
            <p class="footer-text">&copy; 2023 Resu.me All rights reserved.</p>
        </footer>
    </div>
</template>

<script lang="ts" setup> 
</script>

<style lang="scss" scoped>
    @import '../css/dashboard.scss';
</style>