<template>
  <section id="get-started" class="get-started">
    <div class="custom-container">
      <div class="wait-sec">
        <h3>{{ upcoming.title }}</h3>
        <nuxt-content :document="upcoming" />
        <a :href="upcoming.link" title="">{{ upcoming.linkText }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    this.upcoming = await this.$content('sections', 'upcoming').fetch()
  },
  data() {
    return {
      upcoming: {},
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
