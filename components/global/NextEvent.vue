<template>
  <section id="get-started" class="get-started">
    <div class="custom-container">
      <div class="wait-sec">
        <h3>{{ wosss21.title }}</h3>
        <nuxt-content :document="wosss21" />
        <a :href="wosss21.link" title="">{{ wosss21.linkText }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    this.wosss21 = await this.$content('sections', 'wosss21').fetch()
  },
  data() {
    return {
      wosss21: {},
    }
  },
}
</script>
<style>
.wait-sec {
  padding: 120px 0;
}
.wait-sec h3 {
  margin-bottom: 30px;
}
.wait-sec .nuxt-content {
  margin-bottom: 30px;
}
</style>
