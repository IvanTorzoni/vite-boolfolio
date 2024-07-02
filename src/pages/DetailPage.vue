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
        axios
        .get(`http://127.0.0.1:8000/api/projects/${slug}`)
        .then((resp) => {
            this.project = resp.data.result;
            // console.log(resp);
        })
        .catch((err => {
            if (err.response.status === 404) {
                this.$router.push({ name: "not-found"});
            }
        }));
    },
};
</script>

<template>
    <div class="container text-center mt-3">
        <div class="container card" v-if="project !== null">
            <h1> {{ project.title }} </h1>
            <p> {{ project.description }} </p>
            <div>
                Technologie applicate:
            </div>
            <p v-if="project.technologies.length > 0">
            <p v-for="technology in project.technologies">{{ technology.name }}</p>
            </p>
            <p v-else>
                Nessuna tecnologia usata
            </p>
            <p> Tipologia del progetto:
                {{ project.type ? project.type.name : "nessuna tipologia applicata" }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>