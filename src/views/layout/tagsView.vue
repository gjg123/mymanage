<template>
	<div class="tagsView">
	
		
		<!--<router-link
        v-for="tag in visitedViews"
        ref="tag"
        :class="isActive(tag)?'active':''"
        
        :key="tag.path"
        tag="span"
        class="tags-view-item">
        {{ tag}}
		tag
    
        
        
      </router-link>-->
	
		<router-link class="tags-view-item"
			v-for="tag in visitedViews" 
			:class="isActive(tag)?'active':''"
			:to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
			:key="tag.path"
			style="float: left;margin-right: 10px;">
		{{tag.title}}
	
			<span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>		
		</router-link>
		

		
		
		
		
		
		
		
	    <!--<ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
	      <li @click="refreshSelectedTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>
	      <li @click="closeSelectedTag(selectedTag)">{{ $t('tagsView.close') }}</li>
	      <li @click="closeOthersTags">{{ $t('tagsView.closeOthers') }}</li>
	      <li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>
	    </ul>-->
	</div>
</template>

<script>
	export default {
		  data() {
		    return {
		      visible: false,
		      top: 0,
		      left: 0,
		      List:[],
		      selectedTag: {}
		    }
		  },
		  watch: {
		    $route() {
		      this.addTags()
		      this.visitedViews
		      
		      //this.moveToCurrentTag()
		    },
//		    visible(value) {
//		      if (value) {
//		        document.body.addEventListener('click', this.closeMenu)
//		      } else {
//		        document.body.removeEventListener('click', this.closeMenu)
//		      }
//		    }
		  },
		mounted() {
		    this.addTags()
		    this.visitedViews
		},
		computed: {
		    visitedViews() {
		    	console.log(this.$store.state.tagsView.visitedViews)
		        return this.$store.state.tagsView.visitedViews		      
		    },
		    
		},
		created(){
		  	
		},
		methods:{
			isActive(route) {
		//		console.log(this.$route)
		      return route.path === this.$route.path
		    },
			addTags() {
		      const { name } = this.$route
		      if (name) {
		        this.$store.dispatch('addView', this.$route)
		      }
		      return false
		    },
		    closeSelectedTag(view) {
		      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
		        if (this.isActive(view)) {
		          const latestView = visitedViews.slice(-1)[0]
		          if (latestView) {
		            this.$router.push(latestView)
		          } else {
		            this.$router.push('/layout')
		          }
		        }
		      })
		    },
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tagsView
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-item
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type 
      margin-left: 15px;      
    &:last-of-type 
      margin-right: 15px;
    &.active 
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
    &::before 
      content: '';
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
        
  .contextmenu 
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li 
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover 
        background: #eee;
      
    
    
</style>