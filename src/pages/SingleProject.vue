<template>
    <div v-if="project">
        <h3>daje roma</h3>
        <h1>{{ project.title }}</h1>
        <div class="ms_wrapper">
            <img :src="`${this.store.url}/storage/${project.image}`" class="card-img-top" alt="...">
        </div>

    </div>
</template>


<script>

import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.url}/api/projects/${slug}`)
            .then(response => {
                if (response.data.project) {

                    this.project = response.data.project
                } else {
                    this.$router.push({ name: 'page-not-found' });
                }

            });

        console.log(slug);
    }

}
</script>


<style scoped>
.ms_wrapper {
    width: 500px;
}
</style>