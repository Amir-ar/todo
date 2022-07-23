<template>
  <nav class="nav-bar">
    <div class="user-details">
      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
      <div class="text-box">
        <h2>user name</h2>
        <p>user E-mail</p>
      </div>
    </div>
    <router-link to="/"> <i class="fa fa-home" aria-hidden="true"></i> All tasks</router-link>
    <router-link to="/personal"> <i class="fa fa-user" aria-hidden="true"></i> Personal</router-link>
    <router-link to="/work"><i class="fa fa-briefcase" aria-hidden="true"></i> Work</router-link>
    <router-link to="/important"><i class="fa fa-star" aria-hidden="true"></i> Important</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
  padding: 0;
  font-family: vazir;
  background-image: url(https://images.unsplash.com/photo-1655140545489-8e012ed36e1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  font-size: 16px;
}

nav.nav-bar{
  position: absolute;
  top: 0;
  left: 0;
  background-color: #444;
  width: 20%;
  height: 100%;
}
nav.nav-bar .user-details{
  margin: 10px;
  display: flex;
  align-items: center;
}
nav.nav-bar .user-details .text-box{
  margin-left: 10px;
  color: #ccc;
}
nav.nav-bar .user-details .text-box h2,p{
  margin: 10px 0px;
}
nav.nav-bar .user-details img{
  width: 40%;
  border-radius: 50%;
}
nav.nav-bar a{
  color: #ccc;
  display: block;
  padding: 20px;
  border-top: 2px solid #333;
  text-decoration: none;
}
nav.nav-bar a:hover{
  background-color: #333;
}
nav a.router-link-exact-active{
  background-color: #333;
}
</style>
