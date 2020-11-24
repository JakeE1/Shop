<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
    >
    <Header />
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link class="white--text" style="text-decoration: none;" nuxt :to="{name: 'index'}" exact>Shop
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>
    
    <Footer />
  </v-app>
</template>

<script>
  import Header from '~/components/system/Header.vue'
  import Footer from '~/components/system/Footer.vue'

  export default {
    components: { Header, Footer },
    data: () => ({
      drawer: false
    }),
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer
      }
    },
    created() {
      this.$vuetify.theme.dark = false
    }
  }
</script>
