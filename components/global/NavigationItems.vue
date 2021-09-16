<template>
  <ul>
    <li v-for="item in navigation" :key="item.title">
      <div
        v-if="item.subitems"
        class="group inline-block relative text-[#333333]
               font-bold text-2xl
               md:mx-2 md:font-medium md:text-lg"
      >
        <div
          class="inline-flex items-center cursor-default"
        >
          <span class="mr-1">{{ item.title }}</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
        <ul class="absolute hidden group-hover:block bg-[#9C84E1] shadow-xl rounded">
          <nuxt-link
            v-for="subitem in item.subitems"
            :key="subitem.title"
            class="hover:bg-gray-200 w-full py-2 px-4 block whitespace-no-wrap text-lg"
            :to="subitem.path"
            @click="$emit('menuItemClicked')"
          >
            {{ subitem.title }}
          </nuxt-link>
        </ul>
      </div>
      <div v-else @click="$emit('menuItemClicked')">
        <nuxt-link v-if="!item.section" :to="{ path: item.path, hash: item.section }">
          {{ item.title }}
        </nuxt-link>
        <a v-if="item.section && $route.path === '/'" v-scroll-to="item.section" :href="'/'">{{ item.title }}</a>
        <a v-if="item.section && $route.path !== '/'" :href="'/' + item.section">{{ item.title }}</a>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  async fetch () {
    const navigation = await this.$content('navigation').fetch()
    this.navigation = Object.values(navigation).filter(n => !!n.path)
  },
  data () {
    return {
      navigation: []
    }
  }
}
</script>
