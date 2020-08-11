<template>
    <div>
        <Nav/>

        <div class="container-fluid">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Nav from "./components/Nav";

    export default {
        name: 'App',
        components: {Nav}
    }
</script>

<style scoped>
    nav {
        margin-bottom: 1rem;
    }
</style>
