<template>
    <div class="container">
        <div class="row">

            <div class="col-4" v-for="project in projects">
                <div class="card" style="width: 18rem;">
                    <img :src="`${this.url}/storage/${project.image}`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>
                        <a href="#" class="btn btn-primary">Mostra</a>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>



<script>
import axios from 'axios';

export default {
    name: 'AppMain',
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
                    this.projects = response.data.results;
                    console.log(this.projects);
                })

        }
    },
    mounted() {
        this.getProjects();

    }

}

</script>