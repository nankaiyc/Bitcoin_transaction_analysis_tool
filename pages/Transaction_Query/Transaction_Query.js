// pages/Transaction_Query/Transaction_Query.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		transactions: [], // 交易列表数据
		searchValue: '', // 搜索框的输入值
	},
  // 监听输入框输入事件
  onSearchInput(event) {
    this.setData({
      inputValue: event.detail.value,
    });
  },

  // 点击查询按钮事件
  onSearch() {
    const inputValue = this.data.inputValue;
    if (inputValue) {
      this.updateTransactionList(inputValue);
    }
  },

  // 更新交易列表
  updateTransactionList(hash) {
    const apiUrl = `https://blockchain.info/rawtx/${hash}`;
    wx.request({
      url: apiUrl,
      method: 'GET',
      success: (res) => {
		const transaction = res.data;
		console.log(transaction)
		var outaddrlist = []
		var bit_num = 0
		for(var i=0; i<transaction.out.length; i++){
			var outaddress = transaction.out[i].addr
			var out_num = transaction.out[i].value
			// console.log(outaddress)
			outaddrlist.push(outaddress)
			bit_num += out_num
		}
		// console.log(transaction.inputs[0].prev_out.addr)
        const transactionInfo = {
          hash: transaction.hash,
          time: transaction.time,
		  input_address: transaction.inputs[0].prev_out.addr,
		  output_address: outaddrlist,
		  bit_num:bit_num,
		  size:transaction.size
        };

        this.setData({
          transactions: [transactionInfo],
        });
      },
      fail: (err) => {
        console.error('请求失败：', err);
      },
    });
  },
})