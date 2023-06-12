// components/menu/menu.js
const app = getApp()
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    curIndex: {
      type: String,
      value: '0',
    },
    show: {
      type: Boolean,
      value: false,
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    itemArray: [
      {
        name: "交易查询",
        url: "../../pages/Transaction_Query/Transaction_Query",
        icon: "../../resource/Transaction_Query.png"
      },
      {
        name: "区块查询",
        url: "../../pages/Block_Query/Block_Query",
        icon: "../../resource/Block_Query.png"
      },
      {
        name: "地址查询",
        url: "../../pages/Address_Query/Address_Query",
        icon: "../../resource/Address_Query.png"
      },
      {
        name: "交易统计",
        url: "../../pages/Transaction_Statistics/Transaction_Statistics",
        icon: "../../resource/Transaction_Statistics.png"
	  },
	  {
        name: "地址标记",
        url: "../../pages/Address mark/Address mark",
        icon: "../../resource/Address mark.png"
      },
      {
        name: "split",
        url: ""
      },
    ],
    permArray: [],
    safeTop: ''
  },

  methods: {
    close_overlay() {
    this.setData({
      show: false
    })
  },
  pop_left() {
    this.setData({
      show: true
    })
  },
  jump(e) {
	var index = e.currentTarget.dataset.index;
	console.log(index);
      wx.navigateTo({
        url: this.data.itemArray[index].url,
      })
  },
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})