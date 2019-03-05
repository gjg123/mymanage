<template>
	
	<div class="foundlist">
		<div class="inpBox">
			<el-input v-model="search" size="mini" class="inp" placeholder="输入关键字搜索"/>
			<el-button type="primary" size ="mini" @click='onAddMoney()'>添加</el-button>	
		</div>
		<div class="box">
			  <el-table
			 
			    :data="tableData.filter(data => !search || data.income.toLowerCase().includes(search.toLowerCase()))"
			    border
			    tooltip-effect="light"
			    :default-sort = "{prop: 'date'}"
			  	style="width: 100%"
			    size="mini"
			    fit
			    class="tables"
			    max-height="450"
			  >
			    <el-table-column
			      label="创建时间"
			      prop="date"
			      
			      sortable
			      align='center'
			      :show-overflow-tooltip=true
			      >		
			      <template slot-scope="scope">  
                      <i class="el-icon-time"></i>
        			  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </template>
			    </el-table-column>
			 	<el-table-column
			      label="收支类型"
			      prop="type"  
			      align='center'
			      >	
   
			      <template slot-scope="scope">                     
        			  <span style="color: red">{{ scope.row.type }}</span>
                  </template>
			    </el-table-column>
			    <el-table-column
			      label="收支描述"
			      prop="describe" 
			   align='center'
			      >	
			      <template slot-scope="scope">                      
        			  <span style="color: red">{{ scope.row.describe }}</span>
                  </template>
			    </el-table-column>
			    <el-table-column
			      label="收入"
			      prop="income" 
			     align='center'
			      sortable
			    >	
			    
			      <template slot-scope="scope">                      
        			  <span style="color: red">{{ scope.row.income }}</span>
                  </template>
			    </el-table-column>
			    <el-table-column
			      label="支出"
			      align='center' 
			      prop="expend"
			      sortable
			      >	
	    
			      <template slot-scope="scope">                      
        			  <span style="color: red">{{ scope.row.expend }}</span>
                  </template>
			    </el-table-column>
			    <el-table-column
			      label="账户现金"
			      sortable
			      prop="cash" 
			       align='center'
			      >	
			      <template slot-scope="scope">                      
        			  <span style="color: red">{{ scope.row.cash }}</span>
                  </template>
			    </el-table-column>
			    <el-table-column
			      label="备注"
			      prop="remark" 
			       align='center'
			     >	
			      <template slot-scope="scope">                      
        			  <span style="color: red">{{ scope.row.remark }}</span>
                  </template>
			    </el-table-column>
			    <el-table-column
			      label="操作"
			      
			      prop="operation"
			      align='center'
			        width="220"
			    >	
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          type="warning" 
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
			  <!-- 分页 -->
             <el-row>
                <el-col :span="24">
                    <div class="pagination">
                        <el-pagination
                           
                            :page-sizes="paginations.page_sizes"
                            :page-size="paginations.page_size"
                            :layout="paginations.layout"
                            :total="paginations.total"
                            :current-page.sync='paginations.page_index'
                            
                             @size-change="handleSizeChange"
      						@current-change="handleCurre"
                           >
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
		      
         
             
		</div>
		
           
               
		<dialogs :dialogs="dialogs" :form='form' @update="getProfile" ></dialogs>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import dialogs from '@/components/dialogs.vue'
//	import FileSaver from "file-saver";	
//	import XLSX from "xlsx";
 export default {
 	components:{dialogs,},
    data() {
      return {
      	search:'',
      	dialogs: {
	        show: false,
	        title: "",
	        option: "edit"
	    },
	    search_data: {
	        startTime: "",
	        endTime: ""
	    },
	    form: {
	      dates: '',
          type:'',
          describe:"",
          income:"",
          expend: '',
          cash:"",
          remark: ''	        
	      
	    },
	    paginations: {
	        page_index: 1, // 当前位于哪页
	        total: 0, // 总数
	        page_size: 5, // 1页显示多少条
	        page_sizes: [5, 10, 15, 20], //每页显示多少条
	        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
	    },
        tableData: [
       
        ],
        allTableData: [],
      }
    },
    computed: {
	   
	},
    created() {
	    this.getProfile();// 获取表格数据渲染到页面
	},
    methods: {
    	deletTableData(){
    		//this.tableData.push()
    	},
    	handleDownload() {    		
		      // 设置当前日期
		      let time = new Date();
		      let year = time.getFullYear();
		      let month = time.getMonth() + 1;
		      let day = time.getDate();
		      let name = year + "" + month + "" + day;
		      // console.log(name)
		      /* generate workbook object from table */
		      //  .table要导出的是哪一个表格
		      var wb = XLSX.utils.table_to_book(document.querySelector(".tables"));
		      /* get binary string as output */
		      var wbout = XLSX.write(wb, {
		        bookType: "xlsx",
		        bookSST: true,
		        type: "array"
		      });
		      try {
		        //  name+'.xlsx'表示导出的excel表格名字
		        FileSaver.saveAs(
		          new Blob([wbout], { type: "application/octet-stream" }),
		          name + ".xlsx"
		        );
		      } catch (e) {
		        if (typeof console !== "undefined") console.log(e, wbout);
		      }
		      return wbout;
	    },
    	handleSizeChange(page_size){
    		// 切换size
	      this.paginations.page_index = 1;
	      this.paginations.page_size = page_size;
	      this.tableData = this.allTableData.filter((item, index) => {
	        return index < page_size;
          });
    	},
    	handleCurre(page){
    		// 当前页
		      let sortnum = this.paginations.page_size * (page - 1);
		      let table = this.allTableData.filter((item, index) => {
		        return index >= sortnum;
		      });
		      // 设置默认分页数据
		      this.tableData = table.filter((item, index) => {
		        return index < this.paginations.page_size;
		      });
    	},
	    getProfile() {
	    	let dataTableList = this.$store.state.app.tableDatas
	    	this.tableData = dataTableList
		    this.allTableData = dataTableList
  	    	this.filterTableData = dataTableList
  	    	// 设置分页数据
    		this.setPaginations();
//	    	var that = this
//	   		this.$axios({
//				    method:"get",
//				    url:'/user/getList',	
//				})
//		    .then(function(res){
//		    	console.log("模拟数据")
//	            console.log(res.data)
//		    	that.tableData = res.data;
//		    	that.allTableData = res.data;
//   	    	that.filterTableData = res.data;
//   	    	that.$store.dispatch('addDataTable', that.tableData)
//	            // 设置分页数据
//    			that.setPaginations();
//    		
//	        })
//	    	.catch(function(err){
//	          console.log(err)
//	       })	
	        
	   	
//	      this.$axios("/api/profiles/test").then(res => {
//	      	console.log(res.data)
//	        this.tableData = res.data;	
//	        this.allTableData = res.data;
//     	 this.filterTableData = res.data;
//	        // 设置分页数据
//      	this.setPaginations();
//	      });
	  },
	  setPaginations() {
	      // 总页数
	      this.paginations.total = this.allTableData.length;
	      this.paginations.page_index = 1;
	      this.paginations.page_size = 5;
	      // 设置默认分页数据
	      this.tableData = this.allTableData.filter((item, index) => {
	        return index < this.paginations.page_size;
	      });
	  },
      onScreeoutMoney() {	      
	     // 筛选
      if (!this.search_data.startTime || !this.search_data.endTime) {
        this.$message({
          type: "warning",
          message: "请选择时间区间"
        });
        this.getProfile();
        return;
      }
      const stime = this.search_data.startTime.getTime();
      const etime = this.search_data.endTime.getTime();
      this.allTableData = this.filterTableData.filter(item => {
        let date = new Date(item.date);
        let time = date.getTime();
        return time >= stime && time <= etime;
      });
      // 分页数据
      this.setPaginations();
	  },
      handleEdit(index, row) {
        console.log(index, row);
        	// 编辑
	      this.dialogs = {
	        show: true,
	        title: "修改资金信息",
	        option: "edit"
	      }
	      this.form = {
	        type: row.type,
	        describe: row.describe,
	        income: row.income,
	        expend: row.expend,
	        cash: row.cash,
	        remark: row.remark,
	        id: index
	     
	      }
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData.splice(index,1)
        // 删除
//      this.$axios.delete(`/api/profiles/delete/${row._id}`).then(res => {
//	        this.$message("删除成功");
//	        this.getProfile();
//      });
        
      },
      onAddMoney(){
      	this.dialogs.show=true
      	this.dialogs = {
	        show: true,
	        title: "添加",
	        option: "add"
	    };
        this.form = {
	        type: "",
	        describe: "",
	        income: "",
	        expend: "",
	        cash: "",
	        remark: "",
	        id: ""	     
        };
      }
    },
    
  }
</script>

<style scoped>
	.foundlist{
	    height: 100%;
	
	    box-sizing: border-box;	
	   
		background: #ccc;
	}
	.foundlist .inpBox{
		height:40px;
		line-height: 40px;
		text-align: right;
		background: #fff;
		padding-right:20px ;
	}
	.foundlist .inp{
		display: inline-block;
		width:100px;
		height:20px;
		margin-right:20px;
		
	}
	.box{
		
	}
	.fromtop{
		padding-top: 5px;
		padding-left: 20px;
	}
	.btnRight{
		float:right;
	}
	.fromtop .el-form-item{
		margin-bottom: 5px;
	}
	.pagination {
	  text-align: right;
	  margin-top: 10px;
	  margin-right: 50px;
	}
	
	/*.el-table .cell{
  position:relative;
}
.el-table .caret-wrapper{
  position:absolute;
  top:-4px;
  right:-4px;
}*/


</style>