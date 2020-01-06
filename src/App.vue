<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="line">Home</router-link>
      <router-link to="/mobile">mobile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .line {
    position: relative;
    padding-right: 20px;
  }
  .line:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 9px;
    transform: translateY(-50%);
    width: 1px;
    height: 20px;
    background: #000;
  }
}
</style>
