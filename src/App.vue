<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/test11">test11</router-link>  
      <router-link to="/test22">test22</router-link> 
      <router-link to="/menu">menu</router-link>
      <router-link to="/menu2">menu2</router-link>
      <router-link to="/store">store</router-link>
    </nav>
    <el-button type="primary">主要按钮</el-button>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
  font-size: large;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
