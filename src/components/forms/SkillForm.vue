<template>
    <div class="skill-container">
        <div class="skill-heading" @click="active = !active">
            <span v-if="props.skill.skillName">{{props.skill.skillName}}</span>
            <span v-else>(Not specified)</span>

            <IconArrowDown v-if="active" class="arrow"/>
            <IconArrowUp v-else class="arrow"/>
            <IconDelete class="delete-icon" @click="emits('deleted:skill', props.skill.id)"/>
        </div>
        <div v-if="active" class="skill-form">
            <InputField 
                :vModel="form.skillName"
                :type="'text'"
                :name="'Skill'"
                :title="'Skill'"
                :updateCallback="(value: string)=>{form.skillName = value}"
                @update:value="onUpdateValue"/>

        </div>
    </div>
</template>

<script lang="ts" setup>
import InputField from '../InputField.vue';
import { ref, type Ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import type { SkillVM } from '@/api';
import IconArrowDown from '../icons/IconArrowDown.vue';
import IconArrowUp from '../icons/IconArrowUp.vue';
import IconDelete from '../icons/IconDelete.vue';

const props = defineProps<{
    skill: SkillVM,
}>();

const emits = defineEmits(['updated:value', 'deleted:skill']);

const active: Ref<boolean> = ref(false);

let form = ref({
    skillName: props.skill.skillName,
});

function onUpdateValue()
{
    emits('updated:value', props.skill.id, form.value);
}

</script>

<style lang="scss" scoped>
@import '../../styles/imports.scss';
h1 {
    font-family: 'Gothic A1';
    font-size: 1.6rem;
    font-weight: 800;
    color: #1E2532;
    margin-bottom: 1rem; 
}

.skill-container {
    border: 1px solid rgb(231, 234, 244);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 15px 20px;
    margin-bottom: 15px;
    
    .skill-heading {
        width: 100%;
        padding: 15px 20px;
        padding-left: 0;
        cursor: pointer;
        transition: .1s;
        font-weight: 500;
        position: relative;

        .arrow {
            position: absolute;
            top: 35%;
            right: 0;
            fill: #9fa6bb;
        }

        .delete-icon {
            position: absolute;
            top: 38%;
            right: -3.5rem;;
            fill: #9fa6bb;
            opacity: 0;
            transition: opacity .1s;
            cursor: pointer;

            &:before {
                content: "";
                position: absolute;
                inset: -8px;
            }

            &:hover {
                fill: rgb(26, 145, 240);
            }
        }

        &:hover {
            .delete-icon {
                opacity: 1;
            }
        }
    }
    
    .skill-form {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 3rem;
    }

    &:hover {
        .skill-heading {
            color: rgb(26, 145, 240);

            .arrow {
                fill: rgb(26, 145, 240);
            }
        }
    }
}
</style>