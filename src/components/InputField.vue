<template>
    <div class="input-container">
        <label :for="props.name">{{props.title}}</label>
        <input
            :value="props.modelValue"
            :type="props.type"
            :name="props.name"
            v-model="props.vModel">
            
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    title?: string,
    value?: string,
    modelValue?: string,
    type?: string,
    vModel?: any,
    name?: string,
}>()
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

.input-container {
    label {
        font-size: .9rem;
        line-height: 20px;
        color: rgb(130, 139, 162);
        font-family: 'Manrope';
        font-weight: 500;
    }
    
    input {
        display: flex;
        flex: 0 0 calc(40% - 20px);
        width: 80%;
        border-radius: 3px;
        padding: 14px 16px;
        display: block;
        caret-color: rgb(26, 145, 240);
        background-color: rgb(239, 242, 249);
        outline: none;
        border: 0px;
        color: rgb(30, 37, 50);
        transition: color 0.1s ease 0s;
        font-family: 'Manrope';
        font-size: 1.1rem;
        font-weight: 500;
    }
}
</style>