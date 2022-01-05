<template>
    <div v-if="error"> {{ error }} </div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>

    <div v-else>
        <Spinner />
    </div>
</template>

<script>

import getPost from '../composables/getSinglePost'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'

export default {
    props: ['id'],

    components: {
        Spinner
    },

    setup(props) {
        const route = useRoute();

        const { post, error, load } = getPost(route.params.id);
        load();
        return { post, error, load}
    }
}
</script>

<style>

    .post {
        max-width: 1200px;
        margin: 0 auto;
    }

    .post p {
        color: #444;
        margin-top: 40px;
        line-height:  1.5em;
    }

    .pre {
        white-space: pre-wrap;
    }

</style>