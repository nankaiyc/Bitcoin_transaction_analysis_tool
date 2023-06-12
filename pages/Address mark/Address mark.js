Page({
	data: {
	  bitcoinAddress: '', // 比特币地址
	  markInfo: '', // 标记信息
	},
  
	// 监听比特币地址输入框的输入事件
	onBitcoinAddressInput: function (event) {
	  const value = event.detail.value;
	  this.setData({
		bitcoinAddress: value,
	  });
	},
  
	// 监听标记信息输入框的输入事件
	onMarkInfoInput: function (event) {
	  const value = event.detail.value;
	  this.setData({
		markInfo: value,
	  });
	},
  
	// 提交标记信息
	onSubmit: function () {
	  const { bitcoinAddress, markInfo } = this.data;
  
	  // 在此处执行提交标记信息的逻辑，可以调用后端接口将标记信息保存到数据库等操作
  
	  // 提交成功后给出提示
	  wx.showToast({
		title: '标记提交成功',
		icon: 'success',
		duration: 2000,
	  });
	},
  });
  