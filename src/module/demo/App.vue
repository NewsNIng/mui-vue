<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">栗子</h1>
    </header>
    <div class="mui-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for='i,o of 6'>
                <a href="javascript:;" @tap='show'>
                    <img class="mui-media-object mui-pull-left" src="http://placehold.it/40x30">
                    <div class="mui-media-body">
                        <span>幸福</span>
                        <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </a>
            </li>
            
        </ul>
    </div>
  </div>
</template>
<script>
  import {
    mui
  } from 'common/js/index.js'

  export default {
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
      plusReady(cw) {
        alert(cw.id+'12')
      },
      show(){
      	alert(123)
      }
    }

  }

</script>
