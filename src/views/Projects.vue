<template>
    <div class="projects p-grid">
        <Card class="card p-col-2" v-for="(project, index) in projects" :index="index" >
            <template #header>
                <img :src="languages[project.language].img" :alt="project.name" style="height: 15rem" />
            </template>
            <template #title>
                <h5>
                    Имя репозитория:
                    <br>
                    {{project.name}}
                </h5>
            </template>
            <template #content>
                <Chip :class="`chip-${project.language}`" :label="project.language" />
            </template>
            <template #footer style="display: flex">
                <div class="card-footer">
                    <a :href="project.html_url" target="_blank">
                        <Button icon="pi pi-external-link" class="p-button-rounded p-button-secondary"/>
                    </a>
                    <a :href="project.owner.html_url" target="_blank">
                        <Avatar :image="project.owner.avatar_url" shape="circle" size="large"/>
                    </a>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Card from 'primevue/card';
    import Button from 'primevue/button';
    import Avatar from 'primevue/avatar';
    import Chip from 'primevue/chip';

    export default {
        name: 'Projects',
        components: { Card, Button, Avatar, Chip },
        data() {
            return {
                chosenLanguage: []
            }
        },
        computed: {
            ...mapGetters(['getProjects', 'getLanguages']),
            projects() {
                return this.getProjects;
            },
            languages() {
                return this.getLanguages;
            }
        },
        mounted() {
            this.getRepos();
        },
        methods: {
            ...mapActions(['getRepos'])
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/languages.scss";
    .p-grid {
        margin: 0 auto;
    }
    .card {
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        margin: 2em;
    }
    .card-footer {
        display: flex;
    }
    .p-button {
        width: 3rem !important;
        height: 3rem !important;
    }
</style>