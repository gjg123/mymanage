
export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return config.body 
  },
  addItem: config => { 
   // const { username } = JSON.parse(config.body)
    const mes={"messsage":"add"}
    return mes
  },
  editItem: config => {
  	const mes={"messsage":"edit"}
   // const { username } = JSON.parse(config.body)
    return mes
  },
  

  
}
