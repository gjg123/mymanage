<template>
	<div class="topNav">
		<toggle :is-active="sidebar.opened" :toggle-click="toggleSideBar"  class="toggle" >		
		</toggle>
		<breadcrumb class="breadcrumb-container"/>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	import breadcrumb from '@/components/breadcrumb.vue'
	import toggle from '@/components/toggle.vue'
	export default {
		  methods: {
		    toggleSideBar() {
		      this.$store.dispatch('toggleSideBar')
		    },

		  },
		    computed: {
		    ...mapGetters([
		      'sidebar',
		      'device'
		    ])
		  },
		  components:{toggle,breadcrumb}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.topNav
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  background: #ccc;	
  .toggle 
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  .breadcrumb-container
    float: left;
  
</style>