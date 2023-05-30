<template>
    <div class="ms_container">



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
                })
        }
    },
    mounted() {
        this.getProjects();
    }

}

</script>