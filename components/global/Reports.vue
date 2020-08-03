<template>
  <section id="allReports" class="pricing">
    <div class="fixed-bg bg5"></div>
    <div class="custom-container">
      <div class="heading st2">
        <h3>{{ reports.title }}</h3>
      </div>
      <div class="custom-container">
        <p>
          <nuxt-content :document="reports" />
        </p>
      </div>
      <div class="pricing-plan">
        <div class="row">
          <div v-for="(report, i) in content" :key="i" class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="price" :style="!report.link && 'pointer-events: none'">
              <div class="price-head">
                <h4 style="text-transform: none;">{{ report.title }}</h4>
                <ul>
                  <li>
                    <h3>{{ report.year }}</h3>
                  </li>
                </ul>
              </div>
              <p>
                {{ report.description }}
              </p>
              <a :href="report.link" title="">{{ report.link ? 'get report' : 'after' }}</a>
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
    this.reports = await this.$content('sections', 'reports').fetch()
    this.content = this.reports.allReports.filter((r) => {
      return r.title
    })
  },
  data() {
    return {
      reports: {},
    }
  },
}
</script>
