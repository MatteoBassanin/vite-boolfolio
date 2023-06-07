<template>
    <div class="container">
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" v-model="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>


<script>

import { store } from '../store';
import axios from 'axios';
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendForm() {
            axios.post(`${this.store.url}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }
            ).then(response => {

                console.log(response);

            })
        }
    }

}



</script>