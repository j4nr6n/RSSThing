<template>
    <div>
        <Nav/>

        <div class="container-fluid">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
    nav {
        margin-bottom: 1rem;
    }
</style>

<script>
    import Nav from "./components/Nav";

    export default {
        components: {Nav}
    }
</script>
