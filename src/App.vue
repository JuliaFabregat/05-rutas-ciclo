<template>

  <Navbar />

  <img alt="Vue logo" src="./assets/logo.png">
  <router-view />

</template>

<script>
// para realizar el LazyLoad en vue como tal hay que importar defineAsyncComponent y luego usarlo para cargar el componente de forma asíncrona, lo que permite que el componente se cargue solo cuando sea necesario, mejorando así el rendimiento de la aplicación al reducir el tamaño del bundle inicial.
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import( /* webpackChunkName: "Navbar" */ './modules/shared/components/Navbar'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
