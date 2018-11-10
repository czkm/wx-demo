// pages/detail/detail.js
let datas = require('../../data/datalist.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    isCollected:false,
    index :null,
    item : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取参数
    console.log(options);
    let dataArr = options.data.split(',');//使用split方法将字符串分割为数组
    // console.log(dataArr);//此时得到的结果变成一个数组
    let item = options.data[0];
    let index = options.data[1];
    

      this.setData({
        detailObj: datas.imglist[item],
        index: index,
        item: item
      })
      //根据本地缓存来变判断用户是否添加购物车
    let detailColletced =  wx.getStorageSync('isCollected');
    console.log(detailColletced);
      //判断
    let gdata = item + index;
    if (detailColletced[gdata]){
      //有值就说明收藏过
      this.setData({
        isCollected : true
      })
    }
    if (!detailColletced){
      //没值就初始化空对象
      wx.setStorageSync('isCollected', {})
    }

  },
  handleCollection() {
    //设置标识记录缓存
    let gitem = this.options.data[0];
    let gindex = this.options.data[1];
    let gdata = gitem+gindex;
    console.log(gdata)
    //更新状态
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected 
    });
    //提示用户
    let title = isCollected?'加入成功':'已取消'
    wx.showToast({
      title,
      icon: 'success'
    });
    
    // let {gdata}= this.data;
    
    //获取本地状态 
    wx.getStorage({
      key: 'isCollected',
      success: (datas) =>{
        // console.log(data, typeof data)
        //缓存到本地
        let obj = datas.data;
        console.log(obj);  //{00:ture}
        obj[gdata] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {
            console.log(obj)
          }
        })

      },
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