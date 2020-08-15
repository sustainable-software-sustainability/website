<template>
  <ul>
    <li v-for="item in navigation" :key="item.title" @click="$emit('menuItemClicked')">
      <nuxt-link v-if="!item.section" :to="{ path: item.path, hash: item.section }">{{ item.title }}</nuxt-link>
      <a v-if="item.section && $route.path === '/'" :href="'/'" v-scroll-to="item.section">{{ item.title }}</a>
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
    }
  },
}
</script>
