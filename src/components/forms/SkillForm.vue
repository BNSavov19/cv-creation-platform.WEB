<template>
    <div class="skill">
        <span>{{skillName}}</span>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    skillName: string,
}>()
</script>

<style lang="scss" scoped>
.skill {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 12px 12px 0px;
    padding: 6px 6px 6px 10px;
    border-radius: 4px;
    background-color: rgb(239, 242, 249);
    color: rgb(30, 37, 50);
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
    will-change: opacity, transform;
    cursor: pointer;
}

</style>