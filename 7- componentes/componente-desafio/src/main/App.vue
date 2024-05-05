<template>
  <v-app>
    <NavBar />    
    <Menu />
    <Content />
    <Footer />    
  </v-app>
</template>

<script>

import NavBar from '@/components/template/NavBar.vue'
import Menu from '@/components/template/Menu.vue'
import Content from '@/components/template/Content.vue'
import Footer from '@/components/template/Footer.vue'

export default {
  components: { NavBar, Menu, Content, Footer  }
}
</script>
