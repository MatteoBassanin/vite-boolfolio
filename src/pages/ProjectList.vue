<template>
    <div class="container">
        <div class="row">
            <h3>fdsdfsdfs

            </h3>

            <AppCard v-for="project in projects" :title="project.title" :slug="project.slug"></AppCard>

        </div>
    </div>
</template>



<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import { store } from '../store.js';

export default {
    name: 'PostList',

    components: {
        AppCard,
    },
    data() {
        return {
            projects: [],
            store
        }
    },
    methods: {

        getProjects() {
            console.log("daje");


            axios.get(`${this.store.url}/api/projects`)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.result;
                    console.log(this.projects);
                })

        }
    },
    mounted() {
        this.getProjects();

    }

}

</script>