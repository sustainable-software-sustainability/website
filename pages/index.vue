<template>
  <div>
    <header>
      <top-bar />
    </header>

    <section></section>
    <main-section />

    <next-event />

    <!--<features />-->
    <reports />

    <goals />

    <!--    <services />-->

    <!--    <news />-->

    <!--    <testimonial />-->

    <footer>
      <div class="top-footer">
        <div class="fixed-bg footer-bg"></div>
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
                <!--widget-about end-->
              </div>
              <div class="col-lg-6">
                <!--<div class="widget widget-contact">
                  <h3 class="widget-title">Contact</h3>
                  <ul>
                    <li>
                      <a href="mailto:info@wosss.org">info@wosss.org</a>
                    </li>
                  </ul>
                </div>-->
                <!--widget-contact end-->
              </div>
            </div>
          </div>
          <!--top-footer-data end-->
        </div>
      </div>
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
