import Mock from 'mockjs'
import loginAPI from './login'




// 登录相关
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
//Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
//Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

Mock.mock(/\/user\/add/, 'post', loginAPI.addItem)
Mock.mock(/\/user\/edit/, 'post', loginAPI.editItem)