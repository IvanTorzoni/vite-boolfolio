<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
        };
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
            this.projects = resp.data.result;
            console.log(resp);
        });
    },
};
</script>

<template>

    <div class="container">
        <h1 class="text-center">Posts Displayer</h1>
        <div class="row row-cols-4 g-3">
            <div class="col" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>