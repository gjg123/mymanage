<template>
<div class="layout " :class="classObj"> 
    <left-nav class="sidebar-container"></left-nav>      
    <div class="main-container">   
      <top-nav></top-nav>
      <tags-view></tags-view>
      <router-view/>
    </div>		  
 </div>
</template>

<script>
// @ is an alias to /src
import leftNav from '@/components/leftNav.vue'
import topNav from '@/components/topNav.vue'
import tagsView from './tagsView.vue'

export default {		
	name:'layout',
    created(){
  		this.getList()
    },
    computed: {
	    sidebar() {
	       return this.$store.state.app.sidebar
		},
	    classObj() {
	        return {
			    hideSidebar: !this.sidebar.opened,
			    openSidebar: this.sidebar.opened,		   		    
	       }
	    }
    },
    methods:{
	  	handleClickOutside() {
	        this.$store.dispatch('closeSideBar', { withoutAnimation: false })
	    },
	  	getList(){ 	
		    this.$axios({
				    method:"POST",
				    url:'/user/login',
				    data:{
				      name:"11",
				      pwd:"123"
				    }
				})
		    .then(function(res){
	          console.log(res)
	        })
	    	.catch(function(err){
	          console.log(err)
	       })      
	  	}
    },
    components: {
	    leftNav,
	    topNav,
		tagsView
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../stylus/layout.styl";
          
        
      
    

          
        
      
    
  
  

 
</style>
