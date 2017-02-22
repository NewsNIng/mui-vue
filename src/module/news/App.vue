<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">咨询</h1>
    </header>
    <div class="mui-content">
        
    </div>
  </div>
</template>
<script>
  import {
    mui,
    ax
  } from 'common/js/index.js'
	
	
	
  export default {
    data() {
      return {

      }
    },
    mounted() {
    	let params = {
    		account: 'stu1',
    		pwd: '1BEB31CDCC5374B64BA3007821C46BCC'
    	}
    	
			ax.send('/user/userLogin',{
				params
			}).then(rs => {
				console.log(JSON.stringify(rs.data))
			})
    },
    methods: {
      plusReady(cw) {}
    }

  }

</script>

