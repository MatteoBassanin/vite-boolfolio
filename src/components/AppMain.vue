<template>
    <div class="container">
        <div class="row">


            <AppCard v-for="project in projects" :title="project.title"></AppCard>

        </div>
    </div>
</template>



<script>
import axios from 'axios';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',

    components: {
        AppCard,
    },
    data() {
        return {
            projects: [],
            url: "http://localhost:8000"
        }
    },
    methods: {

        getProjects() {
            console.log("daje");


            axios.get(`${this.url}/api/projects`)
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