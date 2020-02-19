<template>
    <div class="page">
      <div class="container">
          <div class="text-center">
                <img class="d-block mx-auto" src="../assets/logo.svg" alt="" width="72" height="72">
                <h3 class="mb-3 mt-3">Profile</h3>
            </div>

            <a @click.prevent="logout()" title="Sair" class="logout">Sair <i class="fas fa-sign-out-alt"></i></a>
            
            <div class="row">
                <div class="col-md-4 mx-auto py-3">
                    <article class="card">
                      <div class="media">
                        <img class="mr-3" :src="avatar" alt="Generic placeholder image">
                        <div class="media-body py-3">
                          <h5 class="mt-0">{{first_name}} {{last_name}}</h5>
                          <p>{{email}}</p>
                        </div>
                      </div>
                    </article>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  }),
  methods: {
    logout () {
      localStorage.removeItem('auth-token')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
