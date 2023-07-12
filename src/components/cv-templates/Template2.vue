<template>
    <div class="template-wrapper">
        <div class="left-side-sections">
            <div class="image-and-name">
                <img class="user-image" src="../../assets/stock-images/stockimage2.jpg" alt="">
        
                <div class="name-and-occupation">
                    <h2 class="name">John Lee</h2>
                    <p class="occupation">UX UI Designer</p>
                </div>
            </div>

            <div class="skills-tab">
                <h3 class="section-title">Skills</h3>

                <ul class="section-list">
                    <li>UX UI Design</li>
                    <li>Web Design</li>
                    <li>Branding</li>
                    <li>Graphic Design</li>
                    <li>Animation</li>
                </ul>
            </div>

            <div class="education">
                <h3 class="section-title">Education</h3>

                <ul class="section-list">
                    <li>
                        <div class="education-info">
                            <span class="education-year">2019 - 2023</span>
                        
                            <span class="degree">Bachelor of Computer Science</span>

                            <h4 class="institution">California Institute of Technology</h4>  
                        </div>  
                    </li>

                    <li>
                        <div class="education-info">
                            <span class="education-year">2019 - 20233</span>
                        
                            <span class="degree">Bachelor of Graphic Design</span>
    
                            <h4 class="institution">University of Pennsylvania</h4>    
                        </div>
                    </li>

                    <li>
                        <div class="education-info">
                            <span class="education-year">2019 - 2023</span>
                        
                            <span class="degree">Bachelor of Animation</span>
    
                            <h4 class="institution">Brown University</h4>    
                        </div>
                    </li>
                </ul>
            </div>

            <div class="languages">
                <h3 class="section-title">Languages</h3>

                <ul class="section-list" type="none">
                    <li><span class="language">English</span> - <span class="language-level">Conversational</span></li>
                    <li><span class="language">German</span> - <span class="language-level">Native</span></li>
                </ul>
            </div>
        </div>
    
        <div class="right-side-sections">
            <div class="basic-info">
                <h3 class="section-title">Contact</h3>

                <div class="contact-info-wrapper">
                    <div class="phone-number-wrapper">
                        <span class="info-tag">Phone Number: </span>
                        <span class="phone-number">+62 822 2045 4652</span>
                    </div>

                    <div class="email-wrapper">
                        <span class="info-tag">Email: </span>
                        <span class="email">johnlee@gmail.com</span>
                    </div>

                    <div class="website-wrapper">
                        <span class="info-tag">Website: </span>
                        <span class="website">www.leonettalloyd.com</span>
                    </div>

                    <div class="residence-wrapper">
                        <span class="info-tag">Residence: </span>
                        <span class="residence">San Francisco, USA</span>
                    </div>
                </div>
            </div>

            <div class="about">
                <h3 class="section-title">About Me</h3>

                <p class="section-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore, vero iusto, expedita totam cumque suscipit accusamus perferendis distinctio quae mollitia ipsa. 
                    Sit repellat sequi facilis quaerat at natus nesciunt maiores delectus hic voluptate quasi, dolore ducimus, molestias, et molestiae placeat voluptatibus. 
                    Ex voluptas reprehenderit iste dolores, porro praesentium veritatis laborum.
                </p>
            </div>

            <div class="experience">
                <h3 class="section-title">Experience</h3>

                <ul class="section-list">
                    <li class="experience-description">
                        <span class="duration">Nov 2022 - present</span>
                        <span class="position">Frontend Developer</span>
                        <h4 class="company-name">Google</h4>

                        <p class="section-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Commodi eligendi fugiat atque beatae maiores quasi perferendis reiciendis voluptas! 
                            Tempora quos recusandae iste, molestiae unde corrupti magnam architecto inventore reiciendis accusantium!
                        </p>
                    </li>

                    <li class="experience-description">
                        <span class="duration">Oct 2019 - Nov 2022</span>
                        <span class="position">UX UI Designer</span>
                        <h4 class="company-name">Microsoft</h4>

                        <p class="section-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Commodi eligendi fugiat atque beatae maiores quasi perferendis reiciendis voluptas! 
                            Tempora quos recusandae iste, molestiae unde corrupti magnam architecto inventore reiciendis accusantium!
                        </p>
                    </li>

                    <li class="experience-description">
                        <span class="duration">Sep 2017 - Oct 2019</span>
                        <span class="position">Graphic Designer</span>
                        <h4 class="company-name">Amazon</h4>

                        <p class="section-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Commodi eligendi fugiat atque beatae maiores quasi perferendis reiciendis voluptas! 
                            Tempora quos recusandae iste, molestiae unde corrupti magnam architecto inventore reiciendis accusantium!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

.template-wrapper {
    display: flex;
    border: 1px solid black;
    width: 75rem;
    height: 100rem;
    font-family: 'Lato', sans-serif;
    overflow: hidden;

    .section-title {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .section-list {
        margin-left: -1.4rem;

        li {
            font-weight: 300;
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
        }
    }

    .section-description {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.4;
    }

    .left-side-sections {
        width: 25rem;
        height: fit-content;
        margin: 5rem;
        padding-right: 6rem;
        border-right: 1px solid #dadada;

        & > div {
            border-bottom: 1px solid #dadada;
            padding: 1rem 0 1rem 0;
        }

        .image-and-name {
            .user-image {
                width: 15rem;
                height: 15rem;
                object-fit: cover;
                border-radius: 50%;
                border: 1px solid #dadada;
            }

            .name-and-occupation {
                .name {
                    font-weight: 600;
                    font-size: 2.5rem;
                }

                .occupation {
                    font-size: 1.4rem;
                    font-weight: 300;
                    margin-top: -1.5rem;
                }
            }
        }

        .education {
            .education-info {
                display: flex;
                flex-direction: column;

                .education-year {
                    padding-bottom: 0.5rem;
                }

                .degree {
                    font-weight: 600;
                    margin-bottom: -1rem;
                }

                .institution {
                    font-weight: 400;
                }
            }
        }

        .languages {

            .language {
                font-weight: 400;
                margin-left: -1rem;

            }
        }
    }

    .right-side-sections {
        width: 50rem;
        margin: 5rem 5rem 0 2rem;

        & > div {
            border-bottom: 1px solid #dadada;
            padding: 1rem 0 1rem 0;
        }

        .basic-info {
            .contact-info-wrapper {
                display: flex;
                flex-direction: column;
                font-weight: 300;
                font-size: 1.2rem;

                div {
                    padding-bottom: 0.75rem;

                    .info-tag {
                        font-weight: 400;
                        padding-right: 0.5rem;
                    }
                }
            }
        }

        .experience {
            border: none;
            
            .experience-description {
                display: flex;
                flex-direction: column;
                border-bottom: 1px solid #dadada;

                .duration {
                    padding-bottom: 0.2rem;
                }

                .position {
                    font-weight: 600;
                    margin-bottom: -1rem;
                }

                .company-name {
                    font-weight: 400;
                }
            }
        }

    }
}
</style>