// pages/foodDetail.js
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodCode: null,
    foodInfo: {
      imageUrl: 'https://kidneyhealty.com.cn/images/item_icon.png',
    },
    food_composition: null,
    showModalStatus: true,
    animationData: null,
    preferenceMap: [
      {key: "1", class: "preference-button", value: "不经常吃"},
      {key: "2", class: "preference-button", value: "一般"},
      {key: "3", class: "preference-button", value: "经常吃"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodCode: options.foodCode
    });
    console.log(options);
    wx.showLoading({
      title: "正在加载食材信息...",
      mask: true
    });
    if (this.data.foodCode) {
      let that = this;
      wx.request({
        url: "https://kidneyhealty.com.cn/food/detail/" + this.data.foodCode,
        data: {
          "openId": app.globalData.authInfo.openid
        },
        method: "GET",
        header: {
          "Content-Type": "application/json"
        },
        dataType: "json",
        success: res => {
          wx.hideLoading();
          that.setData({
            foodInfo: res.data
          });
          console.log(this.data.foodInfo);
          // that.setData({
          //   foodInfo: dummy_resp,
          // });
          that.setData({
            food_composition: [
              {name: "蛋白质", value: this.data.foodInfo.composition["蛋白质"]},
              {name: "热量", value: this.data.foodInfo.composition["热量"]},
              {name: "碳水化合物", value: this.data.foodInfo.composition["碳水化合物"]},
              {name: "脂肪", value: this.data.foodInfo.composition["脂肪"]},
              {name: "水", value: this.data.foodInfo.composition["水"]},
              {name: "钠", value: this.data.foodInfo.composition["钠"]},
              {name: "钾", value: this.data.foodInfo.composition["钾"]},
              {name: "磷", value: this.data.foodInfo.composition["磷"]},
            ]
          });

        },
        fail: res => {
          wx.hideLoading();
        }
      });
    }
  },
  showModal: function () {
    // 显示遮罩层
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    });
    setTimeout(function () {
      animation.translateY(0).step();
      this.setData({
        animationData: animation.export()
      });
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.translateY(300).step();
    this.setData({
      animationData: animation.export(),
    });
    setTimeout(function () {
      animation.translateY(0).step();
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  updatePreference: function (e) {
    let preference = e.target.dataset.preference;
    let foodCode = this.data.foodCode;
    wx.request({
      url: "http://localhost:8080/food/preference",
      data: {
        "userId": app.globalData.authInfo.openid,
        "foodId": foodCode,
        "preference": preference,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: "json",
      success: res => {
        if (res.data.status === 500) {
          wx.showModal({
            title: res.data.message,
            status: "fail"
          })
        }
        this.hideModal();
      },
      fail: res => {
      }
    });
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
});