<template>
  <ul>
    <li v-for="item in navigation" :key="item.path" @click="$emit('menuItemClicked')">
      <nuxt-link :to="{ path: item.path, hash: item.section }" v-scroll-to="item.section">{{ item.title }}</nuxt-link>
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
