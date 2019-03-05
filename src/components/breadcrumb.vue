<template>
	
	  <el-breadcrumb class="app-breadcrumb" separator="/">
	    <transition-group name="breadcrumb">
	      <el-breadcrumb-item v-for="(item,index) in this.navPath" :to="item.path" :key='index' >		  	
		  		{{item.name }}
		  </el-breadcrumb-item>	
	    </transition-group> 
	  </el-breadcrumb>
	
</template>

<script>
	export default {
		data(){
			return {
				navPath:null
			}
		},
		watch: {
		    $route() {
		      this.getBreadcrumb()
		    }
		},
		created(){
			this.getBreadcrumb()
		},	
		
		methods:{
			getBreadcrumb() {

		      let matched = this.$route.matched
//		      matched = matched.filter(item => item.name)
//			  this.navPath = matched
		      
		      const first = matched[0]
		      console.log(matched[0])
//		      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
//		        matched = [{ path: '/layout', meta: { title: 'layout' }}].concat(matched)
//		      }
		     // console.log(matched[0])
		      this.navPath = matched
		      console.log(this.navPath)
		   }
		}
	}
	
</script>

<style scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
  }


/*fade*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
  /*breadcrumb transition*/
	.breadcrumb-enter-active,
	.breadcrumb-leave-active {
	  transition: all .5s;
	}
	
	.breadcrumb-enter,
	.breadcrumb-leave-active {
	  opacity: 0;
	  transform: translateX(30px);
	}
	
	.breadcrumb-move {
	  transition: all .5s;
	}
	
	.breadcrumb-leave-active {
	  position: absolute;
	}
</style>