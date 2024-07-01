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
        this.post = resp.data.result;
      });
    },
};
</script>

<template>
    <div class="container text-center mt-3">
        <div v-if="project !== null">
            <h1>SONO LA PAGINA DI DETTAGLI</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>