// pages/suggestDiet/suggestDiet.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:{
      headerText: '膳食建议',
      subHeader: '没有垃圾食品，只有垃圾食法',
    },
    foodIconUrl:'https://kidneyhealty.com.cn/images/food_logo.jpeg',
    logoUrl: 'http://wiki.saraqian.com/wp-content/uploads/2018/08/diet_big_logo.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  foodViewTap: function () {
    wx.navigateTo({
      url: 'foodType/foodType'
    })
  },
  mealViewTap: function () {
    wx.navigateTo({
      url: 'meal/meal'
    })
  },
  dailyTipsViewTap: function () {
    wx.navigateTo({
      url: 'dailyTips/dailyTips'
    })
  },
  doctorAdviceViewTap: function () {
    wx.navigateTo({
      url: 'doctorAdvice/doctorAdvice'
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