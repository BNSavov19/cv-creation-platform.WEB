<template>
    <div class="template-wrapper">
        <div class="top-section">
            <div class="basic-info">
                <h1 class="name">Jorge Hossa</h1>
                <span class="occupation">Frontend developer and Visual designer</span>

                <p class="about">
                    A passionate designer and web developer, solving problems, and detail attention oriented.
                </p>

                <div class="contact-information">
                    <div class="info-wrapper">
                        <span class="info-tag">Email: </span>
                        <a href="#" class="email info-link">jorgehossa@gmail.com</a>
                    </div>

                    <div class="info-wrapper">
                        <span class="info-tag">Linkedin: </span>
                        <a href="#" class="phone-number info-link">jorgehossa</a>
                    </div>

                    <div class="info-wrapper">
                        <span class="info-tag">Website: </span>
                        <a href="#" class="website info-link">www.jorgehossa.com</a>
                    </div>

                    <div class="info-wrapper">
                        <span class="info-tag">Github: </span>
                        <a href="#" class="residence info-link">jorgehossa</a>
                    </div>
                </div>
            </div>

            <img src="../../assets/stock-images/stockimage3.jpg" alt="img" class="user-image">
        </div>

        <div class="bottom-section">
            <div class="left-side-sections">
                <h2 class="section-title">Experience</h2>

                <ul class="section-list" type="none">
                    <li>
                        <span class="duration">2017 - Currently</span>
                        <span class="position-or-degree">Web developer</span>
                        <span class="company-or-institution">Julius2Grow</span>

                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Maiores, perferendis magni impedit libero commodi quidem tempora eveniet, 
                            enim aspernatur neque harum voluptatem quis voluptatum incidunt obcaecati dignissimos! 
                            Magnam, consequatur dolor!
                        </p>
                    </li>

                    <li>
                        <span class="duration">2016 - 2017</span>
                        <span class="position-or-degree">Creative director</span>
                        <span class="company-or-institution">Microsoft</span>

                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Maiores, perferendis magni impedit libero commodi quidem tempora eveniet, 
                            enim aspernatur neque harum voluptatem quis voluptatum incidunt obcaecati dignissimos! 
                            Magnam, consequatur dolor!
                        </p>
                    </li>

                    <li>
                        <span class="duration">2016 - 2016</span>
                        <span class="position-or-degree">Digital marketing manager</span>
                        <span class="company-or-institution">Google</span>

                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Maiores, perferendis magni impedit libero commodi quidem tempora eveniet, 
                            enim aspernatur neque harum voluptatem quis voluptatum incidunt obcaecati dignissimos! 
                            Magnam, consequatur dolor!
                        </p>
                    </li>

                    <li>
                        <span class="duration">2015 - 2016</span>
                        <span class="position-or-degree">Web designer</span>
                        <span class="company-or-institution">Tesla</span>

                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Maiores, perferendis magni impedit libero commodi quidem tempora eveniet, 
                            enim aspernatur neque harum voluptatem quis voluptatum incidunt obcaecati dignissimos! 
                            Magnam, consequatur dolor!
                        </p>
                    </li>

                    <li>
                        <span class="duration">2013 - 2015</span>
                        <span class="position-or-degree">Graphic designer</span>
                        <span class="company-or-institution">Amazon</span>

                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Maiores, perferendis magni impedit libero commodi quidem tempora eveniet, 
                            enim aspernatur neque harum voluptatem quis voluptatum incidunt obcaecati dignissimos! 
                            Magnam, consequatur dolor!
                        </p>
                    </li>
                </ul>
            </div>
    
            <div class="right-side-sections">
                <div class="skills">
                    <h2 class="section-title">Skills</h2>

                    <p class="section-description">
                        Javascript - ReactJs - HTML - CSS - SASS - BEM - Git - Github - Webpack - Styled Components - Redux - UI design - Figma - Graphic design.
                    </p>
                </div>

                <div class="education">
                    <h2 class="section-title">Education</h2>
    
                    <ul class="section-list" type="none">
                        <li>
                            <span class="duration">2004-2008</span>
                            <span class="position-or-degree">Bachelor of C.S.</span>
                            <span class="company-or-institution">California Institute of Technology</span>
                        </li>
    
                        <li>
                            <span class="duration">2000 - 2004</span>
                            <span class="position-or-degree">Bachelor of Graphic Design.</span>
                            <span class="company-or-institution">University College London</span>
                        </li>
                    </ul>
                </div>
    
                <div class="languages">
                    <h2 class="section-title">Languages</h2>

                    <ul type="none">
                        <li>
                            <span class="language">Spanish - </span>
                            <span class="langauge-level">Native</span>
                        </li>
    
                        <li>
                            <span class="language">English - </span>
                            <span class="langauge-level">Limited working proficiency</span>
                        </li>
                    </ul>
                </div>
    
                <div class="projects">
                    <h2 class="section-title">Projects</h2>

                    <ul type="none">
                        <li>
                            <a class="project-name" href="#">Hope-Tracker</a>
                            <p class="section-description">
                                COVID app focused on recover cases per country. React, React-Router, Github, Figma, React Chart.
                            </p>
                        </li>
    
                        <li>
                            <a class="project-name" href="#">Simple Weather Card App</a>
                            <p class="section-description">
                                Simple weather card store the last city search. Javascript, OOP, SAAS, Github, HTML, Nestify.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
    
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');

@mixin gradient-text-color {
    background: linear-gradient(to right, #d322c0 0%, #6114ed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
} 

.template-wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 75rem;
    height: 100rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    overflow: hidden;

    .section-title {
        font-size: 1.5rem;
        display: inline-block;
        border-bottom: 3px solid black;
        margin-bottom: 0;
    }

    .section-list {
        margin-left: -2.5rem;
        display: flex;
        flex-direction: column;

        li {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid rgb(196, 196, 196);
            margin-bottom: 1rem;

            .duration {
                @include gradient-text-color();
                font-size: 1.25rem;
                padding-bottom: 0.25rem;
            }

            .position-or-degree {
                color: rgb(117, 117, 117);
                font-size: 1.2rem;
                padding-bottom: 0.25rem;
            }

            .company-or-institution {
                padding-bottom: 0.25rem;
                font-size: 1.3rem;
                font-weight: 400;
            }

            .description {
                line-height: 1.5;
            }
        }
    }
    .top-section {
        display: flex;
        justify-content: space-between;
        margin: 3rem 3rem 1rem 3rem;

        .basic-info {

            .name {
                font-size: 4.5rem;
                font-weight: 700;
                margin: 0 0 0.5rem 0;
            }

            .occupation {
                font-size: 1.5rem;
                @include gradient-text-color();
            }

            .about {
                font-size: 1.2rem;
                font-weight: 400;
                max-width: 40rem;
            }
        }

        .contact-information {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 0.75rem;

            .info-tag {
                @include gradient-text-color();
                padding-right: 0.5rem;
            }

            .info-link {
                color: black;
                font-weight: 400;
            }
        }

        .user-image {
            width: 15rem;
            height: 15rem;
            object-fit: cover;
            border-radius: 50%;
            margin: 2rem 2rem 0 0;
        }
    }

    .bottom-section {
        display: flex;
        margin: 0 3rem;

        .left-side-sections {
            width: 50rem;
            margin-right: 4rem;
        }
    
        .right-side-sections {
            width: 25rem;
            display: flex;
            flex-direction: column;

            .languages {
                ul {
                    margin-left: -2.5rem;

                    .language {
                        font-size: 1.1rem;
                        font-weight: 600;
                    }
    
                    .langauge-level {
                        font-size: 1.1rem;
                        font-weight: 400;
                    }
                }
            }

            .projects {
                ul {
                    margin-left: -2.5rem;

                    .project-name {
                        color: #6114ed;
                        font-size: 1.25rem;
                        @include gradient-text-color()
                    }

                    .section-description {
                        font-weight: 400;
                    }
                }
            }
        }
    }
}
</style>