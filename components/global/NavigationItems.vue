<template>
  <ul>
    <li>
      <a class="d-flex" href="#"
        >Dropdown

        <svg style="width: 12px; margin: 6px" width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 12C10.744 12 10.488 11.902 10.293 11.707L0.293006 1.707C0.00700614 1.421 -0.0789938 0.991 0.0760062 0.617C0.230006 0.243 0.596006 0 1.00001 0H21C21.404 0 21.77 0.243 21.924 0.617C22.079 0.991 21.993 1.421 21.707 1.707L11.707 11.707C11.512 11.902 11.256 12 11 12Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <ul class="">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul>
    </li>
    <li v-for="item in navigation" :key="item.title" @click="$emit('menuItemClicked')">
      <nuxt-link v-if="!item.section" :to="{ path: item.path, hash: item.section }">{{ item.title }}</nuxt-link>
      <a v-if="item.section && $route.path === '/'" v-scroll-to="item.section" :href="'/'">{{ item.title }}</a>
      <a v-if="item.section && $route.path !== '/'" :href="'/' + item.section">{{ item.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  async fetch() {
    const navigation = await this.$content('navigation').fetch()
    this.navigation = Object.values(navigation).filter((n) => !!n.path)
  },
  data() {
    return {
      navigation: [],
      toggle: false,
    }
  },
}
</script>
<style>
li {
  padding: 1rem 0;
  display: block;
  float: left;
  position: relative;
  transition-duration: 0.5s;
  text-align: end;
}

li a {
}

li:hover {
  cursor: pointer;
}

ul li ul {
  text-align: initial;
  background: #c1a0f3;
  visibility: hidden;
  opacity: 0;
  min-width: 10rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  right: 0;
  display: none;
}

ul li:hover > ul,
ul li:focus-within > ul, /* this is the line we add */
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
}
#sortbox:checked ~ #sortboxmenu {
  opacity: 1;
}
</style>
