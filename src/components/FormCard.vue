<template>
  <b-card>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="First Name:" label-for="input-1" v-if="formType === 'register'">
            <b-form-input
            id="input-1"
            v-model="form.firstName"
            placeholder="First Name"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2" 
        v-if="formType === 'register'" :class="{ 'is-invalid': submitted && !form.lastName }">
            <b-form-input
            id="input-2"
            v-model="form.lastName"
            placeholder="Last Name"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-3"
            label="Email address:"
            label-for="input-3"
        >
            <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            placeholder="your@mail.com"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-4"
            label="Password:"
            label-for="input-4"
        >
            <b-form-input
            id="input-4"
            v-model="form.password"
            type="password"
            placeholder="At least 6 characters long"
            required
            ></b-form-input>
            <b-form-invalid-feedback :state="validation">
                Password must be at least 6 characters long
            </b-form-invalid-feedback>
        </b-form-group>
        <div class="text-center">
            <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </div>
    </b-form>
  </b-card>
</template>

<script>
    export default {
        props: {
            formType: {
                type: String
            }
        },
        data() {
            return {
                submitted: false,
                form: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                },
            }
        },
        computed: {
            validation() {
                if (this.submitted) {
                    return this.form.password.length >= 6;
                }
                // TODO Add Email Validation
                return true;
            }
        },
        methods: {
            onSubmit(event) {
                this.submitted = true
                event.preventDefault()
                const formData = {
                    firstName: this.form.firstName,
                    lastName: this.form.lastName,
                    email: this.form.email,
                    password: this.form.password,
                    username: this.form.email
                }
                this.$emit('on-submit-form', formData)
            },
            onReset(event) {
                event.preventDefault()
                this.form.firstName = ''
                this.form.lastName = ''
                this.form.email = ''
                this.form.password = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
      width: 80%;
      margin: 0 auto;
      border-radius: 5px;
    }
</style>