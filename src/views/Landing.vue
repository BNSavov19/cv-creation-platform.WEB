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
@import '../styles/imports.scss';

.site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content-wrapper {
        display: flex;
        justify-content: flex-start;
        flex-grow: 1;
        align-items: center;
        margin-left: 10rem;

        .dashboard-title {
            font-size: 4rem;
            max-width: 50rem;
            font-weight: 600;
            line-height: 1.3;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            letter-spacing: -1.574px;
        }

        .dashboard-description {
            font-size: 1.5rem;
            margin: 1.5rem 0 3rem 0;
            color: $secondary-color;
        }

        .create-cv-button {
            font-size: 1.25rem;
            font-weight: 600;
            font-family: 'Manrope';
            font-style: normal;
            color: white;
            box-shadow: 0px 14px 16px -3px rgba(42,131,254,0.19);
            background-color: $accent-color;
            padding: 1rem 2.8rem;
            border-radius: 1rem;
        }
    }
}
</style>