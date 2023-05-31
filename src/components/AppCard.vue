<template>
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <!-- <img:src="`${this.url}/storage/${project.image}`" class="card-img-top" alt="..."> -->

            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ content }}</p>


                <router-link :to="{ name: 'single-project', params: { slug: slug } }"
                    class="btn btn-primary ">Mostra</router-link>
            </div>
        </div>
    </div>
</template>


<script>
import { store } from '../store.js';

export default {
    name: 'AppCard',
    props: {
        title: String,
        slug: String
    },
    data() {
        return {
            store
        }
    },
}

</script>