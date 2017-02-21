<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
			<a v-for='o,i of items' @tap='onTap(o,i)' class="mui-tab-item" :class="{'mui-active': i === 0}">
				<span class="mui-icon" :class="o.icon"></span>
				<span class="mui-tab-label">{{o.name}}</span>
			</a>
		</nav>
	</div>
</template>
<script>
	import {
		mui
	} from 'common/js/index.js'

	// 左右滑动webview
	import webviewGroup from 'common/js/5+/WebviewGroup.js'

	export default {
		data() {
			const styles = {
					top: '0px',
					bottom: '51px',
					popGesture: 'none'
				},
				extras = {
					bounce: 'vertical'
				}
			return {
				styles,
				active: 0,
				items: [{
					name: '首页',
					id: "home.html",
					url: "home.html",
					icon: "mui-icon-home",
					extras,
					styles
				}, {
					name: '商品',
					id: "shopp.html",
					url: "shopp.html",
					icon: "mui-icon-home",
					extras,
					styles
				}]

			}
		},
		mounted() {

		},
		methods: {
			plusReady(cw) {
				this.cw = cw
				//默认打开第一页
				this.showSubPage(this.active)
			},
			onTap(o, i) {
				this.showSubPage(i)
				this.hideSubPage()
				this.active = i
			},
			showSubPage(index = 0) {
        let id = this.items[index].url,
          want = plus.webview.getWebviewById(id)
        if (!want) {
          want = plus.webview.create(id, id, this.styles)
          want.hide()
          this.cw.append(want)
          want.show("fade-in", plus.os.ios ? 300 : 700)
          return want
        }
        if (!want.isVisible()) {
          want.show('none')
        }
        return want
      },
      hideSubPage() {
        plus.webview.hide(this.items[this.active].url)
      }
		}

	}
</script>