<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <div class="search">
      <input type="text" v-model="searchQuery" @keypress.enter="search">
    </div>
    <router-view/>
    <div v-show="loaded" class="loader"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const load = (to, from, next) => {
      const { query } = to.query;
      this.$store.dispatch('clearMovies', query);
      this.$store.dispatch('loadSearch', query);
      next();
}

export default {
  data() {
    return {
      searchQuery: '',
      page: 1
    }
  },
  methods: {
    search() {
      this.$router.push(`/search?query=${this.searchQuery}`);
    }
  },
  computed: {
    ...mapGetters(['loaded']),
  },
  beforeRouteEnter: load,
  beforeRouteUpdate: load
}



</script>


<style lang="scss">
.search {
  margin-bottom: 20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Nunito', sans-serif;
}

ul {
    li {
        display: inline-block;
        vertical-align: top;
        width: 19vw;
        position: relative;
        overflow: hidden;
        background: black;
        
        &:hover {
            section {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
            
            img {
                transform: scale(0.9);
            }
        }
        
        img {
            width: 100%;
            height: auto;
            display: block;
            transform: scale(1);
            transition: transform 350ms ease-in-out;
        }
    }
}

section {
    position: absolute;
    bottom: 0;
    background: rgba(white, 0.9);
    padding: 20px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    opacity: 0;
    transform: translate3d(0, 10%, 0);
    transition: opacity 350ms ease-in-out 150ms, transform 350ms ease-in-out 150ms;
    
    h3 {
        margin-bottom: 10px;
        font-size: 18px;
    }
    
    p {
        line-height: 1.4;
        font-size: 15px;
    }
}


.loader {
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFF;
    
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 20px;
        height: 20px;
        border-top: 2px solid black;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        border-left: 2px solid white;
        content: "";
        border-radius: 100px;
        animation: spin 300ms linear infinite;
        
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            
            to {
                transform: rotate(360deg);
            }
        }
    }
}


</style>
