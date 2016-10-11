<style src="./testPage/style.css"></style>
<template src="./testPage/template.html"></template>
<script>
import router from '../router';
export default {
  router,
  methods: {
    goToBar() {
      router.push('/bar')
      //router.go(0) // <-- only with this, it will work 
    }
  },

};
</script>
