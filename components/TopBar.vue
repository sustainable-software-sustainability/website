<template>
  <header :class="{ 'sticky animated slideInDown': offset }">
    <div class="custom-container">
      <div class="header-data" id="header">
        <logo />
        <div class="mobile-menu-btn">
          <a href="#" title=""><i class="fa fa-bars"></i></a>
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
  </header>
</template>
<script>
export default {
  data() {
    return { offset: 0 }
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
