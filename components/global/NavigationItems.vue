<template>
  <ul>
    <li v-for="item in navigation" :key="item.path">
      <a v-if="item.path.includes('#') && $route.path === '/'" href="/" v-scroll-to="item.path">{{ item.title }}</a>

      <div v-else>
        <nuxt-link :to="item.path.includes('#') ? '/' + item.path : item.path">{{ item.title }}</nuxt-link>
      </div>
    </li>
  </ul>
</template>
<script>
import navigation from '~/assets/navigation.json'
export default {
  data() {
    return {
      navigation,
    }
  },
  methods(path) {},
}
</script>
