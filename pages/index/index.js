// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    isShow:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断用户是否授权
     this.getUserInfo();
  },
  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          //用户已授权
          this.setData({
            isShow: false
          })
        } else {
          //用户未授权
          console.log("用户未授权")
        }

      }
    })
    //获取用户信息
     wx.getUserInfo({
      success: (data) => {
        console.log(data);
        this.setData({
          userinfo: data.userInfo
        })
      }
    })
  },
  handleGetUserInfo(data){
    //用户点击允许
    if(data.detail.rawData){
      this.getUserInfo();
    }else{
      console.log("用户未授权")
    }

  },
  hadleNext(){
    //点击页面跳转
    wx.redirectTo({
      url: '/pages/list/list',
    })
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