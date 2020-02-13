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
        </b-form>
    </div>
</template>
<script>
    export default {
        name: 'Inscription',
        data() {
            return {
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
            }
        }
    }
</script>
<style lang="scss">
    .error {
        background-color: #ff5555;
    }
</style>
