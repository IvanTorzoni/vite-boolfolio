<script>
import axios from 'axios';
export default {
    data() {
        return {
            project: null
        };
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then((resp) => {
            this.project = resp.data.result;
            console.log(resp);
        });
    },
};
</script>

<template>
    <div class="container text-center mt-3">
        <div class="container card" v-if="project !== null">
            <h1> {{ project.title }} </h1>
            <p> {{ project.description }} </p>
            <p v-for="technology in project.technologies">{{ technology.name }}</p>
            <p> Tipologia del progetto:
                {{ project.type ? project.type.name : "nessuna tipologia applicata" }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>