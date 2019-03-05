<template>
	<div class="login">
		<div class="wrapper">
			<div class="login-wrapper">
				<el-form :model="user" status-icon :rules="rules2" ref="user" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="用户名" prop="userName" >
				    <el-input type="text" autocomplete="off" v-model="user.userName" placeholder="请输入用户名"></el-input>
				  </el-form-item>
				  
				  <el-form-item label="密码" prop="pwd">
				    <el-input type="password" v-model="user.pwd" autocomplete="off"></el-input>
				  </el-form-item>
				  
				  <el-form-item>
				    <el-button class="btn" type="primary" @click="submitForm('user')">登陆</el-button>				   
				  </el-form-item>
				</el-form>
			</div>
		</div>
		{{count}}
		{{name}}
		{{from}}
		{{fn1}}
	</div>
</template>

<script>
	
		        	
	import {mapState} from "vuex";	
	
	export default {
		name:'login',
	    data() {     
	      var validateUserName = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {          
		          callback();
		        }
		  };
	      return {
	        user:{
	      		userName:'',
	      		pwd:'',
	      	},
	      	rules2: {
		      	userName: [
		            { required: true, message: '用户名不能为空', trigger: 'blur' },
		            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
		            { validator: validateUserName, trigger: 'blur' }
		        ],
		        pwd: [
		            { required: true, message: '密码不能为空', trigger: 'blur' },
		            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },		         
		        ],		      		     
		    },	        
	      };
	    },
	    computed:{
	    	
    		fn1(){ return '222'},
	    	...mapState({
	    		count: 'count',
		    	name:'name',
		    	from:'from'
	    	})
	    	
	    },
	   
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate(valid => {
	        	
		        if (valid) {
					this.$store.dispatch('LoginByUsername', this.user).then(() => {
						console.log(this.user)
			        //    this.loading = false
			        //    this.$router.push({ path: this.redirect || '/' })
			        }).catch(() => {
			         //   this.loading = false
			        })
		        } else {
		          console.log("error submit!!");
		          return false;
		        }
			});
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login
  width:100%;
  height:100%;
  background:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
</style>