<template>
    <div class="page">
      <div id="nav" class="menu">
        <router-link to="/places">Maps</router-link>
        <a @click.prevent="logout()" title="Sair" class="logout">Sair <i class="fas fa-sign-out-alt"></i></a>
      </div>
      <div class="container">
          <div class="text-center">
              <img class="d-block mx-auto" src="../assets/logo.svg" alt="" width="72" height="72">
              <h3 class="mb-3 mt-3">Profile</h3>
          </div>
    
          <div class="row">
              <div class="col-sm-12 col-md-7 col-lg-5 mx-auto py-3">
                  <article class="card" v-if="info">
                    <div class="media">
                      <img class="mr-3" :src="info.avatar" :alt="info.first_name + ' ' + info.last_name">
                      <div class="media-body py-3">
                        <h5 class="mt-0">{{info.first_name}} {{info.last_name}}</h5>
                        <p>{{info.email}}</p>
                      </div>
                    </div>
                  </article>

                  <router-link to="/editar" class="col-md-4 mt-4 btn btn-primary d-block mx-auto">Editar perfil</router-link>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
        info: null
    }
  },
  mounted() {
    this.axios
    .get('https://reqres.in/api/users/2')
    .then(response => {
      this.info = response.data.data;
    })
    .catch(error => {
      this.errored = true
    })
    .finally(() => this.loading = false)  
  },
  methods: {
    logout () {
      localStorage.removeItem('auth-token')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
