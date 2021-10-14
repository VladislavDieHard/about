<template>
    <div class="projects">
        <Card v-for="project in projects" style="width: 25rem; margin-bottom: 2em">
<!--            <template #header>-->
<!--                {{project.name}}-->
<!--            </template>-->
            <template #title>
                {{project.name}}
            </template>
            <template #content>
                {{project.language}}
            </template>
            <template #footer>
                <a :href="project.html_url" target="_blank"><i class="pi pi-external-link"></i></a>
            </template>
        </Card>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Card from 'primevue/card';
    import Button from 'primevue/button';

    export default {
        name: 'Projects',
        components: { Card, Button },
        computed: {
            ...mapGetters(['getProjects']),
            projects() {
                return this.getProjects;
            }
        },
        mounted() {
            this.getRepos();
        },
        methods: {
            ...mapActions(['getRepos']),
        }
    }
</script>