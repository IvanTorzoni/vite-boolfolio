<script>
import axios from "axios";
export default {
    data() {
        return {
            projects: []
        }
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
                <div class="card h-100">
                    <div class="card-body">
                        <h4> Titolo :
                            {{ project.title }}
                        </h4>
                        <p> Descrizione :
                            {{ project.description }}
                        </p>
                        <p> Technologie applicate : </p>
                        <p v-for="technology in project.technologies">{{ technology.name }}</p>
                        <p> Tipologia del progetto:
                            {{ project.type ? project.type.name : "nessuna tipologia applicata" }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>