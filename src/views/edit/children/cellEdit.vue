<template>
	<div class="cellEdit">
		<el-table @cell-click="cellEdit"  ref="singleTable" :data="tableData"  style="width: 100%" highlight-current-row >
			<el-table-column type="index"></el-table-column>
            <el-table-column label="日期" width="" align="center">
                <template scope="scope">
                	<input v-model="scope.row.date"  type="v" name="v" id="v" value="" class="cc"/>                 
                    <span class="bb">{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="" align="center">
                <template scope="scope">
                	<input v-model="scope.row.name" type="v" name="v" id="v" value="" class="cc"/>                 
                    <span class="bb">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column label="地址" width="" align="center">
                <template scope="scope">
                	<input v-model="scope.row.address" type="v" name="v" id="v" value="" class="cc"/>                 
                    <span class="bb">{{scope.row.address}}</span>
                </template>
            </el-table-column>           
        </el-table>
		<div class="dataWrapper">
			<div class="" v-for="i in cells">
				{{i}}			
			</div>			
		</div>
		<div class="btnBox">
			<el-button class="subBtn" size="small" type="primary" @click="sub()">提交</el-button>			
		</div>		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isac:false,
				tableData: [
	            { date: '2006-05-02',sex:"女",name: '美丽',address: '北京市丰台区'

	            }, {date: '2007-05-04',sex:"女",name: '小娟',address: '北京市通州区'
	
	            }, {date: '2008-05-01',sex:"女",name: '小丽',address: '北京市顺义区'
	
	            }, {date: '2009-05-03',sex:"女",name: '娟子',address: '北京市西城区'
	
	            }],
			}			
		},
		created(){

		},
	    mounted()  {

	    },
		computed: {
			cells() {
		       return this.tableData
		    },
	    },
		methods:{	
			
			sub(){
				console.log(this.tableData)
			},
			cellEdit(row, column, cell, event) {
				var x=cell.children[0].lastChild
			    var y=cell.children[0].firstChild
				//contentEditable 属性用于设置或返回元素的内容是否可编辑。
			    // cell.contentEditable = true;
			    // cell.focus()
			    //要让它失去焦点 obj.blur();
				//要让他失去焦点响应事件 obj.onblur=function(){};				
			    x.style.display="none"
				y.style.display="block"
				y.focus()
			    y.onblur=function(){
					y.blur()
				    y.style.display="none"
				    x.style.display="block"				
			    }      
			}
		}	
	}
</script>

<style scoped>
	
	@import '../../../stylus/edit/cellEdit.css'

</style>