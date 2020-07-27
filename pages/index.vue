<template>
  <div class="container">
    <article>
      <nuxt-content :document="character" />
      <nuxt-content :document="contact" />
      <nuxt-content :document="goals" />
      <nuxt-content :document="history" />
      <nuxt-content :document="partners" />
      <nuxt-content :document="team" />
      <nuxt-content :document="wosss21" />
    </article>
  </div>
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

  async asyncData({ $content, params }) {
    const character = await $content('character').fetch()
    const contact = await $content('contact').fetch()
    const goals = await $content('goals').fetch()
    const history = await $content('history').fetch()
    const partners = await $content('partners').fetch()
    const team = await $content('team').fetch()
    const wosss21 = await $content('wosss21').fetch()

    return { character, contact, goals, history, partners, team, wosss21 }
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
