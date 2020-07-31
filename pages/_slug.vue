<template>
  <div class="wrapper">
    <top-bar />

    <mobile-menu />

    <section class="main-section">
      <div class="custom-container">
        <div class="main-section-data">
          <nuxt-content :document="section" />
        </div>
        <!--main-section-data end-->
      </div>
    </section>

    <footer>
      <!--top-footer end-->
      <div class="bottom-footer">
        <div class="custom-container">
          <div class="bottom-footer-data">
            <copyright />
            <ul class="social-links">
              <social-links />
            </ul>
          </div>
          <!-- bottom-footer-data end-->
        </div>
      </div>
      <!--bottom-footer end-->
    </footer>
  </div>
  <!--wrapper end-->
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const section = await $content('sections', params.slug).fetch()
    return {
      section,
    }
  },
}
</script>
<style scoped>
.main-section {
  height: calc(100vh - 124px);
}

@media (max-width: 1410px) {
  .main-section {
    height: calc(100vh - 122px);
  }
}

@media (max-width: 768px) {
  .main-section {
    height: calc(100vh - 227px);
  }
}
@media (max-width: 576px) {
  .main-section {
    height: calc(100vh - 272px);
  }
}
.nuxt-content h1 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
