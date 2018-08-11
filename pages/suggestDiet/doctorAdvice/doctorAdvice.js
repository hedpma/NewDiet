// pages/suggestDiet/doctorAdvice/doctorAdvice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: {
      headerText: '营养提示',
      subHeader: '来听听营养师有什么小建议？',
    },
    article:[
      { postId: 1,
        title: "Subject 1",
        description:"Some simple description of the article",
        author: "Doctor Zhuo",
        time: "2018-08-09",
        tag: "CKD"
      },
      {
        postId: 2,
        title: "Subject 2",
        description: "Some simple description 2 of the article",
        author: "Doctor Zhuo 2",
        time: "2018-08-10",
        tag: "CKD"
      }
    ]
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