<template>
  <div>
    <nuxt-content :document="content" />

    <footer>
      <div class="top-footer">
        <div class="custom-container">
          <div class="top-footer-data">
            <div class="row">
              <div class="col-lg-6">
                <div class="widget widget-about">
                  <h3 class="widget-title">Join the conversation</h3>
                  <p>
                    You can
                    <a target="_blank" href="https://bit.ly/wosss-slack" title="">
                      request access
                    </a>
                    to the WoSSS Slack group to join the conversation on software sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="custom-container">
          <div class="bottom-footer-data">
            <copyright />
            <ul class="social-links">
              <social-links />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import VueScrollTo from 'vue-scrollto/src/scrollTo'
export default {
  async asyncData({ $content, params }) {
    const content = await $content('home').fetch()
    return {
      content,
    }
  },

  mounted() {
    this.scrollToElement()
  },

  methods: {
    scrollToElement() {
      if (this.$route.hash) {
        const el = this.$el.querySelector(this.$route.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center', currentTime: 2000 })
        }
      }
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'wosss',
          name: 'WoSSS',
          content: 'Workshop on Sustainable Software Sustainability',
        },
      ],
    }
  },
}
</script>

<style>
.nuxt-content-container.is-editing {
  margin-top: 100px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/*.nuxt-content h2 {*/
/*  font-weight: bold;*/
/*  font-size: 28px;*/
/*}*/
/*.nuxt-content h3 {*/
/*  font-weight: bold;*/
/*  font-size: 22px;*/
/*}*/
/*.nuxt-content p {*/
/*  margin-bottom: 20px;*/
/*}*/
</style>
