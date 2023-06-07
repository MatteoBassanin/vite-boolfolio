<template>
    <div v-if="success" class="alert alert-success" role="alert">
        Grazie invio riuscito , vi contatterò nelle prossime 72 ore!
    </div>

    <div class="container">
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="email" v-model="email">
                <div class="invalid-feedback" v-for="error in errors.email">
                    {{ error }}
                </div>

            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" :class="{ 'is-invalid': errors.name }">
                <div class="invalid-feedback" v-for="error in errors.name">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" v-model="message"
                    :class="{ 'is-invalid': errors.message }"></textarea>
                <div class="invalid-feedback" v-for="error in errors.message">
                    {{ error }}
                </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="sending">
                {{ sending ? 'sending in progess' : 'send' }}
            </button>
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
            message: '',
            success: false,
            sending: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {


            this.success = false;
            this.sending = true;
            this.errors = {};

            axios.post(`${this.store.url}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }
            ).then(response => {

                if (response.data.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.success = true;
                } else {

                    this.errors = response.data.errors
                }

                this.sending = false;

            }).catch(error => {
                this.sending = false;
            })
        }
    }

}



</script>