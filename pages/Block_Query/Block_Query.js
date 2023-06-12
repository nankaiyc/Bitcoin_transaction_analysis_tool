// index.js
Page({
	data: {
	  queryType: 'hash',
	  inputBlockHash: '',
	  inputBlockHeight: '',
	  inputTimestamp: '',
	  blockInfo: null,
	  error: '',
	},
  
	onQueryTypeChange(event) {
	  this.setData({
		queryType: event.detail.value,
	  });
	},
  
	onBlockHashInput(event) {
	  this.setData({
		inputBlockHash: event.detail.value,
	  });
	},
  
	onBlockHeightInput(event) {
	  this.setData({
		inputBlockHeight: event.detail.value,
	  });
	},
  
	onTimestampInput(event) {
	  this.setData({
		inputTimestamp: event.detail.value,
	  });
	},
  
	onQueryButtonClick() {
	  const { queryType, inputBlockHash, inputBlockHeight, inputTimestamp } = this.data;
  
	  let queryParam = '';
	  switch (queryType) {
		case 'hash':
		  queryParam = inputBlockHash;
		  break;
		case 'height':
		  queryParam = inputBlockHeight;
		  break;
		case 'timestamp':
		  queryParam = inputTimestamp;
		  break;
	  }
  
	  if (!queryParam) {
		this.setData({
		  blockInfo: null,
		  error: '请输入查询信息',
		});
		return;
	  }
  
	  wx.request({
		url: 'https://blockchain.info/rawblock/' + queryParam,
		success: (res) => {
		  if (res.statusCode === 200) {
			this.setData({
			  blockInfo: res.data,
			  error: '',
			});
		  } else {
			this.setData({
			  blockInfo: null,
			  error: '查询失败，请重试',
			});
		  }
		},
		fail: () => {
		  this.setData({
			blockInfo: null,
			error: '查询失败，请重试',
		  });
		},
	  });
	},
  });
  
  