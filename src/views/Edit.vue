<template>
    <div class="page">

        <div id="nav" class="menu">
            <router-link to="/places">Maps</router-link>
            <router-link to="/profile">Perfil</router-link>
            <a @click.prevent="logout()" title="Sair" class="logout">Sair <i class="fas fa-sign-out-alt"></i></a>
        </div>

        <div class="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="../assets/logo.svg" alt="" width="72" height="72">
                <h2>Editar usuário</h2>
            </div>

            <div class="row">

                <div class="col-md-5 mx-auto">

                    <form class="needs-validation" novalidate @submit.prevent="submit()">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="email">E-mail</label>
                                <input type="email" class="form-control" id="email" v-model="form.email">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="password">Senha</label>
                                <input type="password" class="form-control" id="password" v-model="form.password">
                            </div>
                        </div>

                        <button class="btn btn-primary float-right" type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data: () => ({
            form: {
                email: '',
                password: ''
            }
        }),
        mounted() {
            this.axios
            .get('https://reqres.in/api/users/2')
            .then(response => {
                this.form.email = response.data.data.email
            })
            .catch(error => {
                this.errored = true
            })
        },
        methods: {
            submit() {
                const router = this.$router
                this.axios.put('https://reqres.in/api/users/2', {
                    email: this.form.email,
                    password: this.form.password
                })
                .then(function (response) {
                    localStorage.setItem('auth-token', response.data.token)
                    router.push({
                        path: '/'
                    })
                })
                .catch(function (error) {

                })
            }
        }
    }
</script>