<template>
    <h1>magica</h1>
</template>


<script>

import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.url}/api/projects/${slug}`)
            .then(response => {
                console.log(response)
            })

        console.log(slug);
    }

}
</script>