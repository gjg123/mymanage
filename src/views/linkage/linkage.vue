<template>
	<div class="linkage">
		    <el-select
		      v-model="formValidate.country" 
		      @change="selectCountry" 
		      placeholder="请选择国家">
		      <el-option
		      	v-for="(item,index) in area"
		      	:key="index"		        		        
		        :label="item.country"
		        :value="item.country">
		      </el-option>
		    </el-select>
		    
		    
		    <el-select
		      v-model="formValidate.city"
		      placeholder="请选择城市">
		      <el-option
		      	v-for="(item,index) in city"
		      	:key="index"		        		        
		        :label="item"
		        :value="item">
		      </el-option>
		    </el-select>
		    
		 
	   
	</div>
</template>

<script>
	
	export default {
		data(){
			return {
				formValidate: { 
                    country:'',
                    city:'',
                },
                city:[],
                area:[
                	{
                		"country":"美国",
                	    "city":["纽约","洛杉矶","旧金山","西雅图","波士顿"]
                	},
                	{
	                  "country":"加拿大",
	                  "city":["温哥华","多伦多","蒙特利尔","其它"]
	                },
                ] 
			}
		},
		methods: {
            selectCountry(value){
            	console.log(value)
                const _this=this;
                this.area.forEach(function (item,index) {
                    if(item.country==value){
                        _this.city=item.city;
                        _this.formValidate.city=_this.city[0];
                    }
                })
            }
        },
	}
</script>

<style>
</style>