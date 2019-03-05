<template>
	<div class="edit">
        <h5 class="title">点击按钮触发编辑</h5>
        <el-table @cell-click="celledit" size="mini" :data="master_department.data" border style="width: 100%" highlight-current-row >
            <el-table-column type="index"></el-table-column>
            <el-table-column v-for="(v,i) in master_department.columns" :prop="v.field" :label="v.title" :width="v.width">
                <template slot-scope="scope">
                    <span v-if="scope.row.isSet">
                        <el-input size="mini" placeholder="请输入内容" v-model="master_department.sel[v.field]">
                        </el-input>
                    </span>
                    <span v-else>{{scope.row[v.field]}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="">
                <template slot-scope="scope">
                    <span class="el-tag el-tag--wages el-tag--mini" style="cursor: pointer;" @click="jobChange(scope.row,scope.$index,true)">
                        {{scope.row.isSet?'保存':"修改"}}
                    </span>
                    <span  v-if="!scope.row.isSet" class="el-tag el-tag--danger el-tag--mini btn" style="cursor: pointer;" @click="delet(scope.row,scope.$index,false)">
                                                              删除						
                    </span>
                    <span  v-else class="el-tag  el-tag--mini btn" style="cursor: pointer;" @click="jobChange(scope.row,scope.$index,false)">
                       	取消
                    </span>
                </template>
            </el-table-column>
        </el-table>  
        <div class="el-table-add-row" style="" >        	
        	<el-button size="mini" type="success" @click="addMasterdepartment()">+ 添加新行</el-button>
        </div>
		<div class="dataWrapper">
			<h5>数据</h5>
			<p v-for="k in master_department.data">{{k}}</p>
		</div>		
		<div class="btnBox">
			<el-button style="width:100px;height:30px;" type="danger" size="mini" unitName="danger" @click="sub">提交</el-button>
		</div>
	</div>
</template>

<script>

	export default {
		data(){
			return {
                master_department: {
                    sel: null,//选中行   
                    columns: [
                        { field: "unitName", title: "单位名称", width: '' },
                        { field: "unitAddress", title: "单位地址", width: '' },
                        { field: "department", title: "所在部门", width: '' },
                        { field: "job", title: "所属职位", width: '' },
                        { field: "wages", title: "月薪收入" ,width: ''}
                    ],
                	data: [
                		{"id":"0" , "unitName": "科技中心", "unitAddress": "1", "department": "1", "job": "1", "wages": "1", "isSet": false, "_temporary": true },
                		{ "id":"1" , "unitName": "研发中心", "unitAddress": "2", "department": "2", "job": "2", "wages": "2", "isSet": false, "_temporary": true }
                	
                	],
                },
			}
		},
        methods: {
        	celledit(row, column, cell, event) {
        		console.log(column)
        	},
            //读取表格数据
            readMasterdepartment() {

            },
            sub(){
            	let arr=[]
           			console.log(this.master_department.sel)
            	 	this.master_department.data.map(i => {           	 	
                  	if (i.isSet==true){
                  		this.master_department.sel.isSet=false
                  		i.isSet==false
                  		i=this.master_department.sel                  		
                  	} 
                  	console.log(i)                  	
                  	i.isSet=false
                  	arr.push(i)
                });
                this.master_department.data=arr
                console.log(this.master_department.data)
    	
            },
            //添加账号
            addMasterdepartment() {
                for (let i of this.master_department.data) {
                    if (i.isSet) return this.$message.warning("请先保存当前编辑项");
                }
                let j = { "unitName": "", "unitAddress": "", "department": "", "job": "", "wages": "", "isSet": true, "_temporary": true };
                this.master_department.data.push(j);
                this.master_department.sel = JSON.parse(JSON.stringify(j));
            },
            delet(row, index, cg){
            	this.master_department.data.splice(index, 1);
            },
            //修改
            jobChange(row, index, cg) {
            	console.log(row)
            	console.log(this.master_department.sel)           	
            	var that=this
                //点击修改 时 先遍历数组，判断数据是否包含isSet为true,
                //如果为true则提示用户先保存当前打开的编辑，并终止执行
                for (let i of this.master_department.data) {
                    if (i.isSet && i.id != row.id) {
                        this.$message.warning("请先保存当前编辑项");
                        return false;
                    }
                }
                //是否是取消操作
                if (!cg) {
                    return row.isSet = !row.isSet;                  
                }
                
                //提交数据
                if (row.isSet) {
                	let data = JSON.parse(JSON.stringify(that.master_department.sel));
                	for (let k in data) row[k] = data[k];
                	row.isSet = false;					
                } else {
                    that.master_department.sel = JSON.parse(JSON.stringify(row));
                    row.isSet = true;
                }
            }
        }
	}
</script>

<style scoped>
	.edit{
		height: 100%;		
	    box-sizing: border-box;		    
		background: #ccc;		
	}
	.title{
		padding: 10px;
	}
	.el-table-add-row {
	    margin-top: 20px;
	    width: 100%;
	    height: 30px;
	    border: 1px dashed #c1c1cd;
	    border-radius: 3px;
	    cursor: pointer;
	    justify-content: center;
	    display: flex;
	    line-height: 30px;
    }
    .edit .btnBox{
    	text-align: right;
		margin-right:50px;
		padding-bottom:20px;
		box-sizing: border-box;
    }
    .btn{
    	margin-left:10px;
    }
    .dataWrapper{
    	padding: 5px;
    }
</style>