<template>
    <div class="tag">
        <div v-if="error">{{error}}</div>
        <div v-if="postsWithTags.length" class="layout">
            <PostList :posts="postsWithTags" />
            <TagCloud :posts="posts"/>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {

    components: {
        PostList,
        TagCloud
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

    .tag {
        max-width: 1200px;
        padding: 10px;
        margin: 0 auto
    }

    .layout {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 20px;
    }

</style>