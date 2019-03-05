<template>
	<div class="rowEdit">
		<h5 class="title">点击一行触发编辑</h5>	
        <el-table ref="singleTable" :data="tableData" class="tb-edit" style="width: 100%" highlight-current-row @row-click="handleCurrentChange">
			<el-table-column type="index"></el-table-column>
            <el-table-column  label="日期" width="" align="center">
                <template scope="scope">
                    <el-input v-if="scope.row.isEdit" size="mini" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input>
                    <span>{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="" align="center">
                <template scope="scope">
                    <el-input size="mini" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓别" width="" align="center">
                <template scope="scope">
                    <el-input size="mini" v-model="scope.row.sex" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.sex}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="住址" align="center">
                <template scope="scope">
                    <el-input size="mini" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.address}}</span>
                </template>
            </el-table-column>
            <!--<el-table-column label="操作" align="center">
                <template scope="scope">                    
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>-->
        </el-table>
		<div class="dataWrapper" >
			<h5>数据</h5>
			<p v-for="d in tableData">{{d}}</p>
		</div>
		<div class="btnBox">
			<el-button size="small" type="danger" @click="setCurrent()">提交</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
	          tableData: [
	            { date: '2006-05-02',sex:"女",name: '美丽',address: '北京市丰台区'

	            }, {date: '2007-05-04',sex:"女",name: '小娟',address: '北京市通州区'
	
	            }, {date: '2008-05-01',sex:"女",name: '小丽',address: '北京市顺义区'
	
	            }, {date: '2009-05-03',sex:"女",name: '娟子',address: '北京市西城区'
	
	            }]
			}
		},
		methods: {
			//点击提交按钮时获取所有数据
			setCurrent(row){
				//取消当前选中行
				this.$refs.singleTable.setCurrentRow(row);
				console.log(this.tableData)
			},
			//选中当前航时触发
            handleCurrentChange(row, event, column) {  

            },
			//行的内容变化后的执行
            handleEdit(index, row) {          
            //	console.log(index, row);
            },
			//点击删除按钮删除一行
            handleDelete(index, row) {     
            	console.log(index, row);
				this.tableData.splice(index,1)
            }

        }
	}
</script>

<style scoped>
	@import '../../../stylus/edit/rowEdit.css'
</style>