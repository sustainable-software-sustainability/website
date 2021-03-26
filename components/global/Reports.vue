<template>
  <section id="reports" class="reporting">
    <div class="fixed-bg bg5"></div>
    <div class="custom-container">
      <div class="heading st2 reports-section">
        <nuxt-content :document="reports" />
      </div>
      <div class="reporting-plan">
        <div class="row">
          <div v-for="(report, i) in content" :key="i" class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="report" :style="!report.link && 'pointer-events: none'">
              <div class="report-head">
                <h4 style="text-transform: none">{{ report.title }}</h4>
                <ul>
                  <li style="width: 100%; text-align: center">
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
    this.reports = await this.$content('sections/reports').fetch()
    this.content = this.reports.allReports.filter((r) => {
      return r.title
    })
  },
  data() {
    return {
      reports: {},
      content: [],
    }
  },
}
</script>

<style>
.reports-section .nuxt-content h3 {
  margin-bottom: 30px;
}
</style>
