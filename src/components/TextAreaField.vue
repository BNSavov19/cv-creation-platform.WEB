<template>
    <div class="input-container">
        <label :for="props.name">{{props.title}}</label>
        <div class="input-wrapper">
          <textarea
              :value="props.vModel"
              :name="props.name"
              @input="debouncedOnInput"></textarea>
        </div>
            
    </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue';


const props = defineProps<{
    title?: string,
    value?: string,
    modelValue?: string,
    vModel?: any,
    name?: string,
    updateCallback?: (value: string)=> void;
}>();
const renderComponent = ref(true);

const emits = defineEmits(["update:value"]);

function onInput(event: Event) {
  update(event);
}

function update(event: Event): void {
}

const debounce = (callback: any, wait: number) => {
  let timeoutId: any = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

const debouncedOnInput = debounce((event: any) => {
  const target = event.target as HTMLInputElement;
  if(props.updateCallback && target.value) {
    props.updateCallback(target.value);
    emits('update:value', target.value);
  }
}, 1000);

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
    .input-wrapper {
    textarea {
          display: flex;
          width: 100%;
          height: 100%;
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
          overflow-wrap: break-word;
          resize: vertical;
      }

    }
}
</style>