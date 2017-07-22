<template>
  <div class="header">
    <div class="content-wrapper">
    	<div class="avatar">
    		<img width="64" height="64" :src="seller.avatar"/>
    	</div>
    	<div class="content">
    		<div class="title">
    			<span class="brand"></span>
    			<span class="name">{{seller.name}}</span>
    		</div>

			<div class="description">
				{{seller.description}}/{{seller.deliveryTime}}分钟送达
			</div>
			<div v-if="seller.supports" class="supports">
				<span class="icon" :class="this.classMap[seller.supports[0].type]"></span>
				<span class="text">{{seller.supports[0].description}}</span>
			</div>
    	</div>
    	<div v-if="seller.supports" class="supports-count" @click="showDetail">
    		<span class="count">{{seller.supports.length}}个</span>
    		<i class="icon-keyboard_arrow_right"></i>
    	</div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
    	<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
    	<span class="icon-keyboard_arrow_right"></span>
    </div>
	<div class="background">
		<img :src="seller.avatar" width="100%" height="100%" />
	</div>
	<transition name="fade">
		<div v-show="detailShow" class="detail">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
					<div class="star-wapper">
						<v-star :size="48" :score="seller.score"></v-star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul class="datail-supports" v-if="seller.supports">
						<li class="supports-item" v-for="item in seller.supports">
							<span class="icon" :class="classMap[item.type]"></span>
							<span class="text">{{item.description}}</span>
						</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="bull-content">{{seller.bulletin}}</p>
					</div>
				</div>
			</div>
			<div class="detail-close" @click="colseDetail">
				<i class="icon-close"></i>
			</div>
		</div>
	</transition>
  </div>
</template>

<script type="text/ecmascript-6">
	import star from '../star/star.vue';
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			};
		},
		methods: {
			showDetail() {
				this.detailShow = true;
			},
			colseDetail() {
				this.detailShow = false;
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		},
		components: {
			'v-star': star
		}
	};
</script>
// 
<style lang="stylus" rel="stylesheet/stylus">

	@import "../../commen/stylus/mixin";

	.header
	  color: #fff
	  overflow: hidden
	  position: relative
	  background: rgba(7, 17, 27, 0.5)
	  .content-wrapper
	  	position: relative
	  	padding: 24px 12px 18px 24px
	  	font-size: 0px
		.avatar
		  display: inline-block
		  vertical-align: top
		  img
		  	border-radius: 2px
		.content
		  display: inline-block
		  margin-left: 16px
		  .title
		  	margin: 2px 0 8px 0
		  	.brand
		  	  display: inline-block
		  	  vertical-align: top
		  	  width: 30px
		  	  height: 18px
		  	  bg-image('brand')
		  	  background-size: 30px 18px
		  	  background-repeat: no-repeat
		  	.name
		  	  margin-left: 6px
		  	  font-size: 16px
		  	  line-height: 18px
		  	  font-weight: bold
		  .description
		  	margin-botton: 10px
		  	line-height: 12px
		  	font-size: 12px
		  .supports
		    margin-top: 10px
		  	.icon
		  	  display: inline-block
		  	  vertical-align: top
		  	  width: 12px
		  	  height: 12px
		  	  margin-rigth: 4px
		  	  background-size: 12px 12px
		  	  background-repeat: no-repeat
		  	  &.decrease
		  	  	bg-image('decrease_1')
		  	  &.discount
		  	  	bg-image('discount_1')
		  	  &.guarantee
		  	  	bg-image('guarantee_1')
		  	  &.invoice
		  	  	bg-image('invoice_1')
		  	  &.special
		  	  	bg-image('special_1')
		  	.text
		  	  line-height: 12px
		  	  font-size: 12px
		.supports-count
		  position: absolute
		  right: 12px
		  bottom: 14px
		  padding: 0 8px
		  height: 24px
		  line-height: 24px
		  border-radius: 14px
		  background: rgba(0,0,0,0.2)
		  text-align: center
		  .count
		  	vertical-align: top
		  	font-size: 10px
		  .icon-keyboard_arrow_right
		  	margin-left: 2px
		  	line-height: 24px
		  	font-size: 10px

	  .bulletin-wrapper
	  	position: relative
	  	height: 28px
	  	line-height: 28px
	  	padding: 0 22px 0 12px
	  	white-space: nowrap
	  	overflow: hidden
	  	text-overflow: ellipsis
	  	background: rgba(7,17,27,0.2)
	  	.bulletin-title
	  	  display: inline-block
	  	  vertical-align: top
	  	  margin-top: 8px
	  	  width: 22px
	  	  height: 12px
	  	  bg-image('bulletin')
	  	  background-size: 22px 12px
	  	  background-repeat: no-repeat
	  	.bulletin-text
	  	  vertical-align: top
	  	  margin: 0 4px
	  	  font-size: 10px
	  	.icon-keyboard_arrow_right
	  	   position: absolute
	  	   margin-left: 2px
	  	   font-size: 10px
	  	   right: 12px
	  	   top: 8px

	  .background
	  	position: absolute
	  	top: 0
	  	left: 0
	  	width: 100%
	  	height: 100%
	  	z-index: -1
	  	filter: blur(10px)

	  .detail
	  	position: fixed
	  	top: 0
	  	left: 0
	  	z-index: 100
	  	width: 100%
	  	height: 100%
	  	overflow: auto
	  	background: rgba(7, 17, 27, 0.8)
	  	&.fade-leave-active, &.fade-enter-active
	  	  transition: all 0.5s
	  	  opacity: 1
	  	&.fade-enter, &.fade-leave-to
	  	  transform: translateX(0px)
	  	  opacity: 0
	  	.detail-wrapper
	  	  min-height: 100%
	  	  width: 100%
	  	  .detail-main
	  	    margin-top: 64px
	  	    padding-bottom : 64px
	  	    .name
	  	      line-height: 16px
	  	      text-align: center
	  	      font-size: 16px
	  	      font-weight: 700
	  	    .star-wapper
	  	      margin-top: 16px
	  	      padding: 2px 0
	  	      text-align: center
	  	    .title
	  	      display: flex
	  	      width: 80%
	  	      margin: 30px auto 24px auto
			  .line
			    flex: 1
			    position: relative
			    top: -6px
			    border-bottom: 1px solid rgba(255, 255, 255, 0.2)
			  .text
			    padding: 0 12px
			    font-size: 14px
			.datail-supports
			  width: 80%
			  margin: 0 auto
			  .supports-item
			    padding: 0 12px
			    margin-bottom: 12px
			    font-size: 0
			    &:last-child
			      margin-botton: 0
			    .icon
			      display: inline-block
			      width: 16px
			      height: 16px
			      line-height: 16px
			      vertical-align: top
			      margin-rigth: 6px
			      background-size: 16px 16px
			      background-repeat: no-repeat
			      &.decrease
			          bg-image('decrease_2')
			      &.discount
			          bg-image('discount_2')
			      &.guarantee
			          bg-image('guarantee_2')
			      &.invoice
			          bg-image('invoice_2')
			      &.special
			          bg-image('special_2')
			    .text
			      line-height: 16px
			      font-size: 12px
			.bulletin
			  width: 80%
			  margin: 0 auto
			  .bull-content
			    padding: 0 12px
			    line-height: 24px
			    font-size: 12px

	  	.detail-close
	  	  position: relative
	  	  width: 32px
	  	  height: 32px
	  	  margin: -64px auto 0 auto
	  	  clear: both
	  	  font-size: 32px

</style>
