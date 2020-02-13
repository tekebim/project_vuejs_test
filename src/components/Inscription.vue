<template>
    <div>
        <h1>Inscription</h1>

        <b-form @submit="onSubmit" v-if="show">
            <b-form-group
                    id="input-group-1"
                    label="Votre adresse email :"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Votre adresse email"
                ></b-form-input>

            </b-form-group>

            <span class="notification">
                <slot name="message"></slot>
            </span>

            <b-button type="submit" variant="primary">Envoyer</b-button>
            {{ message }}
        </b-form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Inscription',
        data() {
            return {
                message: '',
                errors: '',
                form: {
                    email: '',
                    name: '',
                    checked: []
                },
                show: true
            }
        },
        props: {
            classname: String,
            value: String,
            placeholder: String
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                console.log(this.form.email)
                this.checkMail();
            },
            checkMail(){
                const key = '283c27c5bb9328371ccb83a068924fc3';
                const baseURL = 'http://apilayer.net/api/check';
                const apiURL = baseURL + '?' + 'access_key=' + key + '&email=' + this.form.email + '&smtp=1&format=1';
                // Request the api service for checking email
                axios.get(apiURL)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.message = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>
<style lang="scss">
    .error {
        background-color: #ff5555;
    }
</style>
