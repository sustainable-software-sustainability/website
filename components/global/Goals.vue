<template>
  <section id="goals" class="about">
    <div class="fixed-bg bg3"></div>
    <div class="custom-container">
      <div class="about-sec">
        <div class="heading">
          <h3>Our goals</h3>
        </div>
        <div class="row grid">
          <div v-for="goal in goals" :key="goal.n" class="about-list">
            <div class="about-info">
              <div class="about-num">
                <span>{{ goal.n }}</span>
              </div>
              <!--service-num end-->
              <div class="abt-info">
                <h3>{{ goal.title }}</h3>
                <p>
                  {{ goal.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--services-sec end-->
      <nuxt-link to="/goals" class="btn-sbmt">More about our goals</nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
  async fetch() {
    const data = await this.$content('sections', 'goals-section').fetch()
    this.goals = Object.values(data).filter((n) => !!n.n)
  },
  data() {
    return {
      goals: [],
    }
  },
}
</script>

<style scoped>
.grid {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.about-list {
  padding: 100px 35px 0 35px;
}
.btn-sbmt {
  margin: 0 auto;
  align-items: center;
  display: flex;
  width: fit-content;
  float: none;
}
@media (max-width: 770px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .about-list {
    padding-top: 10px;
  }
}
</style>
