Page({
	data: {
	  transactionVolumeData: [], // 交易量数据
	  averageTransactionFee: 0, // 平均交易费用
	  unconfirmedTransactionCount: 0, // 未确认交易数量
	  transactionHeatmapData: "", // 交易热度地图数据
	  addressGraphData: "", // 地址关联图数据
	  transactionTimeDistributionData: "", // 交易时间分布数据
	},
  
	onLoad: function () {
	  this.fetchTransactionStats();
	},
  
	// 获取交易统计数据
	fetchTransactionStats: function () {
	  wx.request({
		url: 'https://api.blockchain.info/stats',
		success: (res) => {
		  const transactionVolumeData = res.data.n_blocks_total; // 交易量数据
		  const averageTransactionFee = res.data.trade_volume_btc; // 平均交易费用
		  const unconfirmedTransactionCount = res.data.n_tx; // 未确认交易数量
		  const transactionHeatmapData = "../../resource/Transaction time distribution.jpg";// 交易热度地图数据
		  const addressGraphData = "../../resource/Transaction hot distribution.jpg"; // 地址关联图数据
		  const transactionTimeDistributionData = res.data.n_tx; // 交易时间分布数据
		  console.log(res.data)
		  // 更新页面数据
		  this.setData({
			transactionVolumeData,
			averageTransactionFee,
			unconfirmedTransactionCount,
			transactionHeatmapData,
			addressGraphData,
			transactionTimeDistributionData,
		  });
		},
		fail: (error) => {
		  console.error('Failed to fetch transaction statistics', error);
		},
	  });
	},
  });
  