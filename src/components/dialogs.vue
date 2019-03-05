<template>
	<div class="dialog">
		<el-dialog 
            :title="dialogs.title" 
            :visible.sync="dialogs.show"
            :close-on-click-modal='false'
            :close-on-press-escape='false'
            :modal-append-to-body="false">
          	<div class="form">
                <el-form 
                    ref="form" 
                    :model="form"               
                    label-width="120px" 
                    style="margin:10px;width:auto;">
					
					<el-form-item prop='type' label="收支类型:">
						    <el-select class="secl" v-model="form.type" placeholder="收支类型">
	                            <el-option
	                             v-for="(formtype, index) in format_type_list"
	                             :key="index" 
	                             :label="formtype" :value="formtype"
	                            ></el-option>
                        	</el-select>
                   </el-form-item>
                  
                    <el-form-item prop='describe' label="收支描述:">
                        <el-input type="describe" v-model="form.describe"></el-input>
                    </el-form-item>
                    <el-form-item prop='income' label="收入:">
                        <el-input type="income" v-model="form.income"></el-input>
                    </el-form-item>
                    <el-form-item prop='expend' label="支出:">
                        <el-input type="expend" v-model="form.expend"></el-input>
                    </el-form-item>
                    <el-form-item prop='cash' label="现金:">
                        <el-input type="cash" v-model="form.cash"></el-input>
                    </el-form-item>
                    <el-form-item prop='remark' label="备注:">
                        <el-input type="remark" v-model="form.remark"></el-input>
                    </el-form-item>
					<el-form-item  class="text_right">
                        <el-button @click="dialogs.show = false">取 消</el-button>
                        <el-button type="primary" @click='onSubmit2("form")'>提  交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
	</div>
	
</template>

<script>
	
	export default {
		   data() {
		      return {
		        format_type_list: [
			        "提现",
			        "提现手续费",
			        "充值",
			        "优惠券",
			        "充值礼券",
			        "转账"
			      ],
		      }
		  },
		  props: {
		    dialogs: Object,
		    form: Object
		  },
		  methods:{
		  	onSubmit2(form){
		  		const url =this.dialogs.option == "add" ? "add" : `edit/${this.form.id}`;
            		var that = this
			   		this.$axios({
						    method:"post",
						    url:`/user/${url}`,	
					})
				    .then(function(res){
				    	console.log(res.data)
				    	let data = res.data
				    	if (data.messsage==="add"){
				    		that.$store.dispatch('addListItem', that.form)
				        	that.dialogs.show = false;
		                	that.$emit("update");
				    	}
				    	if (data.messsage==="edit"){
				    		that.$store.dispatch('deletListItem', that.form)
				        	that.dialogs.show = false;
		                	that.$emit("update");
				    	}
		            
			        })
			    	.catch(function(err){
			          console.log(err)
			       })	
//		  		this.$axios.post(`/api/profiles/${url}`, this.form).then(res => {
//		            // 操作成功
//		            this.$message({
//		              message: "保存成功！",
//		              type: "success"
//		            });
//		            this.dialogs.show = false;
//		            this.$emit("update");
//	            });
		  		
		  		
		  	}
		  }
	}
</script>

<style scoped>
	
@import "../stylus/edit/dialogs.css";	
</style>