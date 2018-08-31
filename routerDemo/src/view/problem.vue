<template>
  <div>
    <pro-child
    :query="query">
    </pro-child>
  </div>
</template>
<script>
import ProChild from '../components/proChild'
export default {
  name: 'problem',
  components: {
    ProChild
  },
  data () {
    return {
      query: {
        name: '',
        sex: ''
      }
    }
  },
  methods: {
    
  }
}
</script>
<style>

</style>


