<template>
  <section id="get-started" class="get-started">
    <div class="custom-container">
      <div class="wait-sec">
        <h3>{{ wosss21.title }}</h3>
        <a href="#" title="">{{ wosss21.description }}</a>
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
