import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken } from '@/tools/cookies'


//二是http 拦截器 ，统一处理所有http请求和响应，

// create an axios instance  创建AXIOS实例
const service = axios.create({
	//这里baseurl就是刚开始配置的开发环境和线上环境地址，webpack会自动读取无需手动再改
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout//请求超时
})

// request interceptor 请求拦截器//request拦截
//请求拦截主要作用是验证请求是否合法，会带有用户token，这里模拟一个token，可以根据实际情况修改
service.interceptors.request.use(
  config => {
    // Do something before request is sent//在发送请求之前做点什么   
    if (store.getters.token) {
    	//将接口返回的token信息配置到接口请求中
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error//处理请求错误    
    console.log(error) // for debug调试用
    Promise.reject(error)  //reject拒绝
  }
)

// response interceptor  响应拦截器


service.interceptors.response.use(
  response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // 请自行在引入 MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //         confirmButtonText: '重新登录',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  

  
  
  
  
  
  
  
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
