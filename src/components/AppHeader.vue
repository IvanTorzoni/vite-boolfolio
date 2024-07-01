<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    routeName: "home",
                    title: "Home",
                },
                {
                    routeName: "projects",
                    title: "Projects Page",
                },
                {
                    routeName: "about",
                    title: "About Page",
                },
            ]
        }
    }
}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav" v-for="link in navLinks">
        <router-link :to="{ name: link.routeName }" class="nav-link active" aria-current="page" href="#"> {{ link.title }}</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>

</style>