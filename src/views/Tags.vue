<template>
    <div v-if="error">{{error}}</div>
    <div v-if="postsWithTags.length">
        <PostList :posts="postsWithTags" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'

export default {

    components: {
        PostList
    },
    
    setup() {

        const route = useRoute();
        const {posts, error, load} = getPosts();

        load();
        
        const postsWithTags = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        });
        
        console.log(postsWithTags);
        return { posts, postsWithTags }
        
    }

}
</script>

<style>

</style>