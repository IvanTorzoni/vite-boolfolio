<script>
export default {
    props: {
        project: Object,
    },
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <h4> Titolo :
                {{ project.title }}
            </h4>
            <p> Descrizione :
                {{ project.description }}
            </p>
            <p v-for="technology in project.technologies">{{ technology.name }}</p>
            <p> Tipologia del progetto:
                {{ project.type ? project.type.name : "nessuna tipologia applicata" }}
            </p>
        </div>
    </div>
</template>