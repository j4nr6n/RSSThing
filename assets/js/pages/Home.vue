<template>
    <div class="row">
        <article class="col-8">
            <p>When the component loads, we fire off x async requests to fetch the feeds.</p>
            <p>
                As soon as the first response comes back, the list will render. Later responses
                will be added to the list as they come back.
            </p>
        </article>
        <div class="col-4">
            <!-- TODO: This card can be moved into it's own component -->
            <div class="card">
                <div class="card-header">RSS Feeds</div>

                <div id="rss-feed-container">
                    <Loader v-if="loading"/>

                    <ul class="list-group list-group-flush" v-if="!loading" v-for="item in items">
                        <li class="list-group-item">
                            <a :href="item.link" rel="noopener" target="_blank">
                                <h5 class="card-title mb-0">{{ item.title }}</h5>
                            </a>
                            <span class="small text-muted mt-0">{{ item.isoDate }}</span>
                            <p class="card-text" v-html="item.contentSnippet"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from '../components/Loader';
    import Parser from 'rss-parser';

    let parser = new Parser({
        timeout: 3000
    });

    // Note: some RSS feeds can't be loaded in the browser due to CORS security.
    // To get around this, you can use a proxy.
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    export default {
        name: 'Home',
        components: {Loader},
        data: () => ({
            loading: false,
            items: []
        }),
        created: function() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData: function() {
                this.loading = true;

                let urls = [
                    'http://lorem-rss.herokuapp.com/feed?unit=hour',
                    'http://lorem-rss.herokuapp.com/feed?unit=minute',
                    'http://lorem-rss.herokuapp.com/feed?unit=second'
                ];

                for (let url of urls) {
                    parser.parseURL(CORS_PROXY + url)
                        .then((feed) => {
                            this.items.push(...feed.items);

                            this.loading = false;
                        });
                }
            }
        }
    };
</script>

<style scoped>
    #rss-feed-container {
        height: 30rem;
        overflow-y: scroll;
    }
</style>
