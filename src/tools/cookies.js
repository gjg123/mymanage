import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
	
  return Cookies.get('token')

}

export function setToken(token) {
	
	
  return Cookies.set( 'token', TokenKey)
  
}

export function removeToken() {
  return Cookies.remove('token')
}