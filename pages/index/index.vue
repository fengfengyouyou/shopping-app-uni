<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="link-box">
			<text @click="toMine">js跳转</text>
			<navigator
				url="/pages/mine/mine"
				open-type="switchTab"
				class="link"
			>我的</navigator>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const title = ref('首页')
	function toMine() {
		console.log('sssss')
		uni.switchTab({
			url: '/pages/mine/mine'
		})
	}
</script>

<style>
	.text-area {
		text-align: center;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.link {
		color: #666;
		text-decoration: underline;
	}
	.link-box {
		display: flex;
	}
</style>
