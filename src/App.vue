<template>
  <div id="app">
    <h1>DETECCIÓN AUTOMATIZADA DEL ENGAÑO</h1>
    <div id="nav">
      <router-link to="/">Realizar prueba</router-link> |
      <router-link to="/help">Ayuda</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background: rgb(178, 230, 255);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #edf7ff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
