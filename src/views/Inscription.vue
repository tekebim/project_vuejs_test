<template>
    <section class="row block-newsletter p-4 p-sm-5">
        <div class="col-lg-6 col-12 m-auto">
            <h1>Recevez les actualités</h1>
            <b-form @submit="onSubmit" v-if="show">
                <div :class="className">
                    <b-form-group
                            id="input-group-email"
                            label="Votre adresse email :"
                            label-for="input-email"
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
                    <div class="notification mb-3" v-html="message"></div>
                    <b-button type="submit" variant="primary" v-if="!success" class="btn btn-secondary">{{
                        form.submitLabel }}
                    </b-button>
                </div>
            </b-form>
        </div>
    </section>
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
                    submitLabel: `M'inscrire`,
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
                            this.form.submitLabel = 'Demande envoyée'
                            this.className = 'success'
                        } else if (response.data.format_valid && response.data.score < 0.5) {
                            this.message = 'Veuillez saisir une vraie adresse email valide'
                            this.form.submitLabel = 'Réessayer'
                            this.className = 'warning'
                        } else {
                            this.message = 'Adresse email non valide, veuillez réessayer.'
                            this.form.submitLabel = 'Réessayer'
                            this.className = 'error'
                        }
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },
        watch: {
            'form.email': function (val) {
                if (val.length < 5) {
                    if (val.length == 0) {
                        this.className = ''
                        this.message = ''
                        this.form.submitLabel = 'M\'inscrire'
                    } else {
                        this.className = 'error'
                        this.message = 'Adresse email incomplète'
                    }
                } else {
                    this.className = ''
                    this.message = ''
                }
            }
        }
    }
</script>

<style lang="scss">
    .block-newsletter {
        background-color: $dark-blue;
        color: $light-color;

        h1 {
            color: $light-blue;
        }
    }

    .error {
        color: $secondary-color;

        input {
            border-color: #ff5555;
        }
    }

    .warning {
        color: #ffc107;

        input {
            border-color: #ffc107;
        }
    }

    .success {
        color: $dark-blue;
    }
</style>
