<template>
  <div class="create">
      <form @submit.prevent="">
        <label>Title: </label>
        <input v-model="title" type="text" required>

        <label>Content: </label>
        <textarea v-model="body" required></textarea>

        <label>Tags(hint enter to add a tag)</label>
        <input @keydown.enter.prevent="handleKeyDown" v-model="tag" type="text" />
        <div v-for="tag in tags" :key="tag">
            #{{ tag }}
        </div>
        <button>Add Post</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const title = ref('');
        const body = ref('');
        const tag = ref('');
        const tags = ref([]);


        const handleKeyDown = (e) => {
            if(!tags.value.includes(tag.value)) {
                tags.value.push(tag.value.trim());
                console.log(tags.value);
            }

            tag.value = '';
        }
        

        return { title, body, tag, tags, handleKeyDown };
    }
}
</script>

<style>

</style>