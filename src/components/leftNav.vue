<template>
	<div class="leftnav">

		<el-scrollbar style="height:100%" class="box">   
			<el-menu :router="true" 
				
				:default-active="$route.path" 
				background-color="#545c64" 
				:collapse="isCollapse"
				mode="vertical"
				text-color="#fff" 
				active-text-color="#ffd04b">
	          <template v-for="route in items">
	            <el-menu-item v-if="!route.children || route.children.length == 1" :index="route.path" :key="route.path">
	            
	              <i class="el-icon-location"></i>
      			  <span slot="title">{{ route.name }}</span>
	            </el-menu-item>
	            <el-submenu v-else :index="route.path" :key="route.path">
	              <template slot="title">
	               
	                <i class="el-icon-location"></i>
      				<span slot="title">{{ route.name }}</span>
	              </template>
	              <el-menu-item v-for="child in route.children" :index="child.path" :key="child.path">	              	
	              	
	              	      <i class="el-icon-location"></i>
      					  <span slot="title">{{ child.name }}</span>
	              </el-menu-item>
	            </el-submenu>	            
	          </template>
	       </el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name:'leftnav',
		data(){
			return {
				 items: [
				 	{
			          icon: "fa-money",
			          name: "首页",
			         t: "首页",
			      	  path: "/layout/index",	
			        },
			        {
			          icon: "fa-asterisk",
			          name: "编辑表格",
			         t: "编辑表格",
			          path: "/layout/edit",
			          children: [			          
			         	 { path: "/layout/edit/rowEdit",t: "行编辑", name: "行编辑" },
						 { path: "/layout/edit/cellEdit",t: "单元格编辑",name: "单元格编辑" },
						 { path: "/layout/edit/btnEdit",t: "按钮编辑",name: "按钮编辑" },
			          ]
			        },
			        {
			          icon: "fa-asterisk",
			          name: "轮播图vswriper",
			          path: "/layout/rotationChart",
			          
			        },
			        {
			          icon: "fa-pagination",
			          name: "分页",
			          path: "/layout/pagination",
			          
			        },
			        {
			          icon: "fa-pagination",
			          name: "下拉框联动",
			          path: "/layout/linkage",
			          
			        },
			        
			      ]
			}
		},
		watch: {
	        
	    },
	    computed: {
		    ...mapGetters([
		      'sidebar'
		    ]),
		    isCollapse() {
		      return !this.sidebar.opened
		    },

	    },
		methods:{
			 handleOpen(key, keyPath) {
			 	 console.log("打开");
		        console.log(key);
		        console.log(keyPath);
		      },
		      handleClose(key, keyPath) {
		      	 console.log("关闭");
		        console.log(key);
		        console.log(keyPath);
		      },
		      subpage(key, keyPath){
		      
		      }
		}
	}	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../stylus/index.css";

</style>