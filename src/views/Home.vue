<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>

    <div v-else>
      <Spinner />
    </div>
   
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'Home',
  components: {
    PostList,
    Spinner, 
  },

  setup() {
    
    const {posts, error, load} = getPosts();
    load();
    return { posts, error }
  }

} 
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
</style>