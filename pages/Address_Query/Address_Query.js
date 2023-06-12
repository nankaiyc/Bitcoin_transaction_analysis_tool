// pages/addressQuery/addressQuery.js

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
	  address: '',
	  transactions: [],
	  balance: 0,
	  flowChartUrl: '',
	},
  
	/**
	 * 输入框输入事件
	 */
	onAddressInput(event) {
	  this.setData({
		address: event.detail.value.trim(),
	  });
	},
  
	/**
	 * 查询按钮点击事件
	 */
	onQueryButtonClick() {
	  const address = this.data.address;
	  if (!address) {
		wx.showToast({
		  title: '请输入比特币地址',
		  icon: 'none',
		});
		return;
	  }
  
	  // 调用地址查询API，获取交易历史记录、余额和比特币流动图URL
	  wx.request({
		url: 'https://blockchain.info/rawaddr/' + address,
		success: (res) => {
		  const data = res.data;
		  const transactions = data.txs.slice(0, 10)|| [];
		  const balance = data.final_balance || 0;
		  const flowChartUrl = "../../resource/Bitcoin_Transaction_Flow.png"; // TODO: 获取比特币流动图URL
  
		  this.setData({
			transactions,
			balance,
			flowChartUrl,
		  });
		},
		fail: (res) => {
		  wx.showToast({
			title: '查询失败，请稍后重试',
			icon: 'none',
		  });
		},
	  });
	},
  });
  