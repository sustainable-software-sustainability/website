<template>
  <header :class="{ 'sticky animated slideInDown': offset }">
    <div class="custom-container">
      <div class="header-data" id="header">
        <logo />
        <div class="mobile-menu-btn">
          <a style="cursor: pointer;" @click="mobileMenu = !mobileMenu"><i class="fa fa-bars"></i></a>
        </div>
        <div class="up-social-links">
          <ul>
            <social-links />
          </ul>
        </div>
        <nav>
          <navigation-items />
        </nav>
      </div>
    </div>
    <div class="responsive-mobile-menu" :class="{ active: mobileMenu }" style="height: 100vh;">
      <span class="close-menu" @click="mobileMenu = !mobileMenu"><i class="mdi mdi-close"></i></span>
      <div class="mobile-menu">
        <navigation-items v-on:menuItemClicked="mobileMenu = false" />
      </div>
      <ul class="mb-social-links">
        <social-links />
      </ul>
      <div class="mb-copyright-text">
        <copyright />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      offset: 0,
      mobileMenu: false,
    }
  },
  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      this.offset = window.pageYOffset > 1
    },
  },
}
</script>
