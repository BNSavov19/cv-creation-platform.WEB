<template>
    <Navbar :resumeTitle="'Boris Savov Ful..'" @export:selected="makePDF" @share:selected="shouldDisplayResumeShareForm = true"/>
    <div class="editor-wrapper">

        <div v-if="shouldDisplayResumeShareForm" class="share-resume-form-container">
            <div class="form-container">
                <div class="close-button">
                    <IconClose @click="shouldDisplayResumeShareForm = false"/>
                </div>
                <h1>Share resume</h1>
                <ShareResumeForm @share:form:submitted="onShareFormSubmit"/>
            </div>
        </div>

        <div class="sidebar-section">
            <div class="form-section">
                <PersonalDetailsForm  v-if="resume.personalInfo" :personalInfoData="resume.personalInfo" :resumeId="resume.id!" :templateName="resume.template?.templateName!" @value:updated="updateValue"/>
            </div>
            <div class="form-section">
                <EmploymentHistorySection :employments="resume.workExperiences" :resumeId="resume.id!" :resumeCreationDate="resume.creationDate" @updatedValue="updateValue"/>
            </div>
            <div class="form-section">
                <EducationSection :educations="resume.educations" :resumeId="resume.id!" :resumeCreationDate="resume.creationDate" @value:updated="updateValue"/>
            </div>
            <div class="form-section">
                <SkillsSection :skills="resume.skills" :resumeId="resume.id!" :recommendedSkills="recommendedSkills" @updated:value="updateValue"/>
            </div>
            <div class="form-section">
                <CertificateSection :certificates="resume.certificates" :resumeId="resume.id!" @value:updated="updateValue"/>
            </div>
        </div>
    
        <div class="preview-section" ref="previewSection">
            <div class="resume-preview" ref="resumePreview">
                <Resume :resumeData="resume"></Resume>
                <div class="templates-button-overlay">
                    <button @click="shouldDisplayTemplatesPopup = true">Change Template</button>
                </div>
            </div>
            
            <div class="templates-popup-container" :class="shouldDisplayTemplatesPopup ? 'templates-popup-container-active' : ''">
                <div class="templates-popup">
                    <TemplatesSlider :templates="['Washington', 'Moscow', 'template2', 'template3']" @template:selected="onTemplateSelected"/>
                    <IconClose @click="shouldDisplayTemplatesPopup = false" class="close-button"/>
                </div>
            </div>
        </div>
    </div>

    <div class="resume-for-export">
        <Resume :resumeData="resume"></Resume>
    </div>

</template>
    
<script lang="ts" setup> 
import storageService from '@/services/storage-service';
import router from '@/router';
import Resume from '@/components/Resume.vue';
import { computed, onMounted, ref, type Ref } from 'vue'
import { useElementSize, useResizeObserver } from '@vueuse/core'
import resumeService from '@/services/resume-service'
import { type ResumeVM, type CertificateVM, type WorkExperienceVM } from '@/api'
import { useRoute } from 'vue-router';
import PersonalDetailsForm from '@/components/forms/PersonalDetailsForm.vue';
import EmploymentHistorySection from '@/components/misc/EmploymentHistorySection.vue';
import EducationSection from '@/components/misc/EducationSection.vue';
import SkillsSection from '@/components/misc/SkillsSection.vue';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import TemplatesSlider from '@/components/TemplatesSlider.vue';
import Navbar from '@/components/Navbar.vue';
import ShareResumeForm from '@/components/forms/ShareResumeForm.vue';
import IconClose from '@/components/icons/IconClose.vue'
import recommendationService from '@/services/recommendation-service';
import CertificateSection from '@/components/misc/CertificateSection.vue';

const route = useRoute();
let resume: Ref<ResumeVM> = ref({});
    
let resumePreviewScale: Ref<number> = ref(0.9);
let resumePreview = ref(), previewSection = ref();
let resumePreviewElement = useElementSize(resumePreview);
let previewSectionElement = useElementSize(previewSection);

let shouldDisplayTemplatesPopup: Ref<boolean> = ref(false);
let shouldDisplayResumeShareForm: Ref<boolean> = ref(false);
let recommendedSkills: Ref<Array<string>> = ref([]);

onMounted(async ()=>{

    if(!storageService.checkForUserLogin()) router.push({name:'login'});

    resumeService.getResumeById(route.params.id as string).then((res)=>{
        resume.value = res.data;
   });

    resumePreviewScale.value = Math.min(previewSectionElement.width.value / resumePreviewElement.width.value, previewSectionElement.height.value / resumePreviewElement.height.value - 0.1);
    useResizeObserver(previewSection, (entries)=>{
        const entry = entries[0];
        const {width, height} = entry.contentRect;
        resumePreviewScale.value = Math.min(width / resumePreviewElement.width.value, height / resumePreviewElement.height.value -0.1);
    })
})

async function updateValue() {
   resume.value = (await resumeService.getResumeById(route.params.id as string)).data;

   recommendationService.getSkillRecommendations('Dynamic Executive with six years of experience helping organizations reach their full potential. Adept in making key decisions and working with other professionals to achieve goals and solve problems. Experienced in managing employee and community programs, and dedicated to successfully directing business operations.').then((res)=>{
    recommendedSkills.value = res.data;
   });
}


async function onShareFormSubmit(email: string) {
    let blob = await blobToBase64(getBlobFromResume());
    resumeService.shareResume('Boris', 'Savov', email, blob as Blob);
}

function makePDF() {
    //window.html2canvas = html2canvas;
    let doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling'],
    });

    html2canvas(document.querySelector('.resume-for-export')!, {
        width: 595,
        height: 842 ,
    }).then((canvas)=>{
        const img = canvas.toDataURL('image/png')

        doc.addImage(img, "PNG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        doc.save(`${resume.value.personalInfo?.firstName} ${resume.value.personalInfo?.lastName} - Resume.pdf`);
    })
}

function getBlobFromResume(): Blob
{

    let blob: Ref<Blob> = ref(new Blob());
    
    let doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling'],
    });
    
    html2canvas(document.querySelector('.resume-for-export')!, {
        width: 595,
        height: 842 ,
    }).then((canvas)=>{
        const img = canvas.toDataURL('image/png')
        
        doc.addImage(img, "PNG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        blob.value = new Blob([doc.output()])
    })

    return blob.value;
}

function blobToBase64(blob: Blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function onTemplateSelected(template: string)
{
    
    resumeService.updateResume(resume.value.id!, storageService.retrieveUserId()!, resume.value.title!, resume.value.personalInfo!, undefined, resume.value.unknownSection?.title!,
    resume.value.unknownSection?.description!, new Date().toDateString(), new Date().toDateString(), template).then(updateValue).then(_=>shouldDisplayTemplatesPopup.value = false);
}
    
</script>
    
<style lang="scss" scoped>
@import '../styles/imports.scss';

.resume-for-export {
    position: absolute;
    z-index: -1;
}

.editor-wrapper {
    position: relative;
    height: 100vh;
    flex-direction: row;
    
    .share-resume-form-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 5;
        background: rgba(6, 4, 27, 0.562);
        display: flex;
        justify-content: center;
        align-items: center;

        .form-container {
            position: relative;
            width: 50%;
            background-color: white;
            width: fit-content;
            box-sizing: border-box;
            padding: 2rem 4rem;
            border-radius: 20px;

            h1 {
                margin-bottom: 3rem;
            }

            .close-button {
                position: absolute;
                top: 1rem;
                right: 1rem;
                cursor: pointer;
            }
        }
    }

    .sidebar-section {
        width: 50%;
        height: fit-content;
        background: white;
        box-sizing: border-box;
        padding: 80px;
        z-index: 4;

        .form-section {
            margin-bottom: 3rem;
        }
    }

    .preview-section {
        position: fixed;
        top: 4rem;
        bottom: 0px;
        right: 0px;
        width: 50%;
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-flow: column nowrap;
        background-color: rgb(101, 110, 131);
        color: rgb(255, 255, 255);
        user-select: none;
        z-index: 0;
        box-sizing: border-box;
        padding: 1rem;
        height: calc(100% - 4rem);


        .resume-preview {
            position: relative;
            transform: scale(v-bind(resumePreviewScale));
            .templates-button-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 4;
                display: flex;
                justify-content: center;
                align-items: center;
    
                &:hover {
                    button {
                        visibility: visible;
                    }
                }
    
                button {
                    background: #2A83FE;
                    border: none;
                    padding: .8rem 2rem;
                    border-radius: 34px;
                    color: white;
                    font-family: 'Manrope';
                    font-size: 1rem;
                    visibility:hidden;
                    cursor: pointer;

                    &:hover {
                        background: #1b69d6;
                    }
                }
            }
        }


        .templates-popup-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(4, 11, 29, 0.329);
            z-index: 6;
            visibility: hidden;


            .templates-popup {
                position: absolute;
                bottom: -100%;
                width: 100%;
                background: rgba(255, 255, 255, 0.87);
                backdrop-filter: blur(22px);
                height: fit-content;
                box-sizing: border-box;
                padding: 1rem 0rem;
                padding-top: 4rem;
                z-index: 6;
                transition: bottom .2s;
                border-top: 2px solid rgb(26, 145, 240);;
                .close-button {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    cursor: pointer;
                }
    
            }
        }

        .templates-popup-container-active {
            visibility: visible;
            .templates-popup {
                bottom: 0;
            }
        }
    }
}
</style>