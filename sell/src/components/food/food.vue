<template>
	<transition name="move">
		<div class="food" v-show="showFlag" ref="food">
			<div class="food-content">
				<div class="image-header">
					<img :src="food.image" :alt="food.name">
					<div class="back">
						<i class="icon-arrow_lift" @click="hide"></i>
					</div>
				</div>
				<div class="content">
					<h1 class="title">{{food.name}}</h1>
					<div class="detail">
						<span class="sell-count">月售{{food.sellCount}}份</span>
						<span class="rating">好评率{{food.rating}}%</span>
					</div>
					<div class="price">
						<span class="new">￥{{food.price}}</span>
    					<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
					</div>
					<div class="cartcontrol-warpper">
    					<v-cartcontrol :food="food"></v-cartcontrol>
    				</div>
    				<transition name="fade">
    					<div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count === 0">加入购物车</div>
    				</transition>
				</div>
				
    		</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import cartcontrol from 'components/cartcontrol/cartcontrol';
	import Vue from 'vue';
	export default {
		props: {
			food: {
				type: Object
			}
		},
		data() {
			return {
				showFlag: false
			};
		},
		methods: {
			show() {
				this.showFlag = true;
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.food, {
							click: true
						});
					} else {
						this.scroll.refresh();
					}
				});
			},
			hide() {
				this.showFlag = false;
			},
			addFirst(event) {
				if (!event._constructed) {
					return;
				}
				this.$emit('cart.add', event.target);
				Vue.set(this.food, 'count', 1);
			}
		},
		components: {
			'v-cartcontrol': cartcontrol
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .food
      position: fixed
      left: 0
      top: 0
      bottom: 48px
      z-index: 30
      width: 100%
      background: #fff
      transform: translate3d(0, 0, 0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.2s linear
      &.move-enter, &.move-leave-to
        transform: translate3d(100%, 0, 0)
      .image-header
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
        .back
          position: absolute
          top: 10px
          left: 0
          .icon-arrow_lift
            display: block
            padding: 10px
            font-size: 20px
            color: #fff
      .content
        padding: 18px
        position: relative
        .title
          line-height: 14px
          margin-bottom: 8px
          font-size: 14px
          font-weight: 700
          color: rgb(7,17,27)
        .detail
          margin-bottom: 18px
          line-height: 10px
          font-size: 0
          height: 10px
          .sell-count, .rating
            font-size: 10px
            color: rgb(147, 153, 159)
          .sell-count
            margin-right: 12px
        .price
            font-weight: 700
            line-height: 24px
            .new
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
        .cartcontrol-warpper
          position: absolute
          right: 12px
          bottom: 12px
        .buy
          position: absolute
          right: 18px
          bottom: 18px
          z-index: 10
          height: 24px
          line-height: 24px
          padding: 0 12px
          box-size: border-box
          font-size: 10px
          border-radius: 12px
          color: #fff
          background: rgb(0, 160, 220)
          &.fade-leave-active, &.fade-enter-active
            transition: all 0.4s linear
            opacity: 1
            transform: translate3d(0, 0, 0)
          &.fade-enter, &.fade-leave-to
            opacity: 0
            transform: translate3d(0, 0, 0)




</style>
