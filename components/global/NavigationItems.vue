<template>
  <ul>
    <li v-for="item in navigation" :key="item.path" @click="$emit('menuItemClicked')">
      <a v-if="item.path.includes('#') && $route.path === '/'" v-scroll-to="item.path" href="/">{{ item.title }}</a>

      <div v-else>
        <nuxt-link :to="{ path: item.path, hash: item.section }">{{ item.title }}</nuxt-link>
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
