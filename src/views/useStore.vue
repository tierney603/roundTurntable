<template>
    <div>
<h1>{{this.$store.state.count}}</h1>
<button @click="addOne">add</button>
    </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
  addOne(){
    console.log(this.$store)
    this.$store.getters.addCount
  }
  }
}
</script>

<style scoped lang="scss">

</style>