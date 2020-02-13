<template>
    <div id="block-inscription">
        <h1>Recevez les actualités</h1>
        <b-form @submit="onSubmit" v-if="show">
            <div :class="className">
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
                            :disabled="success == true"
                    ></b-form-input>

                </b-form-group>

                <div class="notification" v-html="message"></div>

                <b-button type="submit" variant="primary" v-if="!success">Envoyer</b-button>
            </div>
        </b-form>


        <div class="logs">
            {{ logs }}
        </div>

    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Inscription',
        data() {
            return {
                message: '',
                className: '',
                logs: '',
                errors: '',
                form: {
                    email: '',
                    name: '',
                    checked: []
                },
                show: true,
                success: false,
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
                this.checkMail();
            },
            checkMail() {
                const key = '283c27c5bb9328371ccb83a068924fc3';
                const baseURL = 'http://apilayer.net/api/check';
                const apiURL = baseURL + '?' + 'access_key=' + key + '&email=' + this.form.email + '&smtp=1&format=1';
                // Request the api service for checking email
                axios.get(apiURL)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.logs = response.data
                        if (response.data.format_valid && response.data.score >= 0.5) {
                            this.success = true
                            this.message = `Inscription effectuée avec l'adresse email : ${this.form.email}`
                            this.className = 'success'
                        }
                        else if(response.data.format_valid && response.data.score < 0.5) {
                            this.message = 'Veuillez saisir une vraie adresse email valide'
                            this.className = 'warning'
                        }
                        else {
                            this.message = 'Adresse email non valide, veuillez réessayer.'
                            this.className = 'error'
                        }
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
        color: $secondary-color;
        input {
            background-color: #ff5555;
        }
    }
    .success {
        color: $dark-blue;
    }
</style>
