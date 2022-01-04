import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async() => {

        try {
            let data = await fetch('http://localhost:3000/posts/' + id);
            await new Promise((resolve => {
                setTimeout(resolve, 2000);
            }))
            if (!data.ok) {
                throw Error('That Post Doesn\'t exist');
            }

            post.value = await data.json();
        } catch (e) {
            error.value = e.message;
        }
    }

    return { post, error, load };
}

export default getPost;