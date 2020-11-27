<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped dark>
    <Header />
    </v-navigation-drawer>

    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <Logo />
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>
    
    <Footer />
  </v-app>
</template>

<script>
  import Header from '~/components/system/Header'
  import Footer from '~/components/system/Footer'
  import Logo from '~/components/system/Logo'
  
  export default {
    components: { Header, Footer, Logo },
    data: () => ({
    drawer: null,
  }),
    created() {
      this.$vuetify.theme.dark = false
    }
  }
</script>
