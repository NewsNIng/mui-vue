import Axios from './index.js'
import des from './des.js'

const axios = new Axios()
axios.setRequestBefore(c =>{
	Object.assign(c.params, {
		//时间戳
		timestamp: +new Date(),
		//版本
		version: '1.0.1'
	})
	//console.log(JSON.stringify(c))
	return c
})

module.exports = axios
