<template>
  <ul>
    <li v-for="item in navigation" :key="item.path" @click="$emit('menuItemClicked')">
      <a v-if="item.path.includes('#') && $route.path === '/'" href="/" v-scroll-to="item.path">{{ item.title }}</a>

      <div v-else>
        <nuxt-link :to="item.path.includes('#') ? '/' + item.path : item.path">{{ item.title }}</nuxt-link>
      </div>
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
    }
  },
}
</script>
