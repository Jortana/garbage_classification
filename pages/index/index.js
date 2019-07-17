//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    resultList: [
      
    ],
  },

  formSubmit: function (e) {
    var searchName = e.detail.value;
    wx.navigateTo({
      url: "../search/search?s=" + searchName,
    });
  },
})