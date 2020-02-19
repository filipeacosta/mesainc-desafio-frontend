<template>
  <div class="page text-center">
    <form class="form-signin" @submit.prevent="submit()">
      <img class="mb-4 logo" src="../assets/logo.svg" alt="" width="72" height="72">

      <label for="inputEmail" class="sr-only">E-mail</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" v-model="form.email">

      <label for="inputPassword" class="sr-only">Senha</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="form.password">

      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>

      <hr />

      <h5>ou</h5>

      <router-link to="/cadastrar">Cadastre-se</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    submit () {
      console.log(this.form)
      // ativar loader
      const router = this.$router
      this.axios.post('https://reqres.in/api/login', {
        email: this.form.email,
        password: this.form.password
      })
        .then(function (response) {
          localStorage.setItem('auth-token', response.data.token)
          router.push({ path: '/profile' })
        })
        .catch(function (error) {
          
        })
    }
  }
}
</script>

<style lang="scss">
  html,
  body,
  #app{
    height: 100%;
  }

  .page {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
      img{
        margin:0 auto;
      }
      .checkbox {
        font-weight: 400;
      }

      .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;

        &:focus {
          z-index: 2;
        }
      }

      input {
        &[type="email"] {
          margin-bottom: -1px;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        &[type="password"] {
          margin-bottom: 10px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
    }
  }

</style>
