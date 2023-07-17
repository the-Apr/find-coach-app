<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/requests" >Requests</router-link></li>
        <li v-else><router-link to="/auth">Login</router-link></li>
        <li v-if="isLoggedIn" @click="logout"><base-button>Logout</base-button></li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },

  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style scoped>
  header{
    @apply w-full h-20 flex justify-center items-center ; 
    background: #3d008d;
  }
  header a{
    @apply no-underline inline-block py-3 px-6 border-solid border-2 border-transparent;
    color: #fff;
  }
  a:active,
  a:hover,
  a.router-link-active {
  border: 1px solid #f391e3;
  }

  h1 {
  margin: 0;
  }

  h1 a {
  color: white;
  margin: 0;
  }

  h1 a:hover,
  h1 a:active,
  h1 a.router-link-active {
  border-color: transparent;
  }

  header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }

  header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  li {
  margin: 0 0.5rem;
  }
</style>