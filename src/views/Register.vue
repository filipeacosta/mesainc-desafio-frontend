<template>
    <div class="page">  
      <div class="container">
          <div class="py-5 text-center">
              <img class="d-block mx-auto mb-4" src="../assets/logo.svg" alt="" width="72" height="72">
              <h2>Cadastrar usuário</h2>
          </div>

          <div class="row">

              <div class="col-md-5 mx-auto">

                  <form class="needs-validation" novalidate @submit.prevent="submit()">
                      <div class="row">
                          <div class="col-md-6 mb-3">
                              <label for="email">E-mail</label>
                              <input type="email" class="form-control" id="email" placeholder="seuemail@examplo.com" v-model="form.email">
                          </div>
                          <div class="col-md-6 mb-3">
                              <label for="password">Senha</label>
                              <input type="password" class="form-control" id="password" placeholder="Senha" v-model="form.password">
                          </div>
                      </div>

                      <button class="btn btn-primary float-right" type="submit">Cadastrar</button>
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
  methods: {
    submit () {
      console.log(this.form)
      const router = this.$router
      this.axios.post('https://reqres.in/api/register', {
        email: this.form.email,
        password: this.form.password
      })
        .then(function (response) {
          localStorage.setItem('auth-token', response.data.token)
          router.push({ path: '/profile' })
        })
        .catch(function (error) {
          console.log('catch')
          console.log(error)
        })
    }
  }
}
</script>
