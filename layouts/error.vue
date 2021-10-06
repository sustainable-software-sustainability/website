<template>
  <p class="mt-20 p-20">
    Page not found.
  </p>
</template>

<script>
export default {
  layout ({ redirect, route }) {
    if (route.path === '/wosss21-home/') {
      redirect(301, '/wosss21/home')
    }
    if (route.path === '/wosss21-agenda/') {
      redirect(301, '/wosss21/agenda')
    }
    if (route.path === '/wosss21-home') {
      redirect(301, '/wosss21/home')
    }
    if (route.path === '/wosss21-agenda') {
      redirect(301, '/wosss21/agenda')
    }
    return 'layout'
  },
  props: ['error']
}

</script>
