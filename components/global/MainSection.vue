<template>
  <section class="main-section">
    <div class="custom-container">
      <div class="main-section-data">
        <div class="row">
          <div class="col-lg-5">
            <div class="banner-text">
              <h3>{{ content.subtitle }}</h3>
              <h2 style="text-transform: initial">{{ content.title }}</h2>
              <nuxt-content :document="content" />
              <a v-scroll-to="content.link" href="#" title="">{{ content.linkText }}</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="banner-imgs">
              <img src="~/assets/img/look.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async fetch() {
    this.content = await this.$content('sections/main-section').fetch()
  },
  data() {
    return {
      content: {},
    }
  },
}
</script>
