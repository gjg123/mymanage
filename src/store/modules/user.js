import { loginByUsername} from '@/api/login'
import { getToken, setToken, removeToken } from '@/tools/cookies.js'

//	state  数据部分

//	getters 数据的获取
	
//	mutations: 数据的操作
	
//	actions： 处理数据的过程	


const user = {
  state: {
    user: '',
    token: getToken(),
    name: '',
    items: [
	 	{icon: "fa-money",name: "首页",t: "首页",path: "/layout/index",},
        {icon: "fa-asterisk",name: "编辑表格",t: "编辑表格", path: "/layout/edit",
          children: [			          
         	 { path: "/layout/edit/rowEdit",t: "行编辑", name: "行编辑" },
			 { path: "/layout/edit/cellEdit",t: "单元格编辑",name: "单元格编辑" },
			 { path: "/layout/edit/btnEdit",t: "按钮编辑",name: "按钮编辑" },
          ]
        },
        {icon: "fa-asterisk",name: "轮播图vswriper",path: "/layout/rotationChart",},
        {icon: "fa-pagination",name: "分页",path: "/layout/pagination", }, 
      ]
  },

  mutations: {

    SET_TOKEN: (state, token) => {
      state.token = token
    },

  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
    
      
      const username = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
      	
        loginByUsername(username, userInfo.pwd).then(response => {
        	 console.log("9999")
        	
      		console.log(getToken())
          const data = response.data
           console.log(data)
          var tokens = "123456789"
          setToken(tokens)
          //commit('SET_TOKEN', data.token)
          //setToken(response.data.token)
          commit('SET_TOKEN', tokens)
          
          
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default user
