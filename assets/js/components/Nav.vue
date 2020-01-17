<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="(link, index) in nav_links" :key="index">
                    <router-link class="nav-link" :to="link.to">{{ link.name }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
</style>

<script>
    export default {
        data: () => ({
            nav_links: [
                {
                    name: 'Home',
                    to: '/',
                },
                {
                    name: 'Bad Link',
                    to: '/random-bad-url'
                }
            ],
        })
    };
</script>
