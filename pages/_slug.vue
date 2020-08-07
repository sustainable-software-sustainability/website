<template>
  <div class="slug">
    <div>
      <section class="main-section">
        <div class="custom-container">
          <div class="main-section-data">
            <nuxt-content :document="section" />
          </div>
        </div>
      </section>
    </div>

    <footer class="slug">
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
</template>

<script>
export default {
  transition: 'fade',
  async asyncData({ $content, params }) {
    const section = await $content('sections', params.slug).fetch()
    return {
      section,
    }
  },
}
</script>
<style>
.slug .nuxt-content {
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
}
.nuxt-content .partners {
  margin-bottom: 16px;
}
.nuxt-content .partners a img {
  width: 250px;
  height: 100px;
  object-fit: contain;
  padding: 0 10px;
}
.slug {
  color: #333;
}
.slug .main-section {
  height: 100vh;
}
.slug .custom-container {
  display: flex;
  flex-direction: column;
}
.slug .main-section-data {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 20px;
  min-height: 100%;
}
footer.slug {
  position: fixed;
  height: 33px;
  bottom: 0;
  color: white;
}
footer.slug .bottom-footer {
  padding: 5px 0;
}
.slug p {
  font-size: 1rem;
  margin-bottom: 1.3rem;
}
.slug h1,
.slug h2,
.slug h3,
.slug h4 {
  font-family: 'Work Sans';
  font-weight: 700;
  margin: 1.414rem 0 0.5rem;
  line-height: 1.42;
}

.slug h1 {
  font-size: 3rem;
}

.slug h2 {
  font-size: 2.5rem;
}

.slug h3 {
  font-size: 2rem;
}

.slug h4 {
  font-size: 1.5rem;
}

.slug h5 {
  font-size: 1rem;
}

.slug h6 {
  font-size: 0.88rem;
}

.slug small {
  font-size: 0.707em;
}

.slug img,
.slug canvas,
.slug iframe,
.slug video,
.slug svg,
.slug select,
.slug textarea {
  max-width: 100%;
}
</style>
