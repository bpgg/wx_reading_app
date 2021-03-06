// pages/user/user.js
import regeneratorRuntime from '../../utils/runtime.js'
import { wxRequest} from "../../utils/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeContent:"请广大市民务必勤洗手，戴口罩，减少出门。武汉加油！！！",
    nickName:'',
    gender:'',
    avatarUrl:'',
    city:'',
    province:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toEditPage(){
    wx.navigateTo({
      url: '../../views/user/userEdit/userEdit'
    })
  },
  toSetPage(){
    wx.navigateTo({
      url: '../../views/user/userSet/userSet'
    })
  },
  async _getUserInfo(){
    let openid = wx.getStorageSync('openid')
    const res = await wxRequest('user/wx_getUserInfo',{
      data:{
        openid:openid
      }
    })
    return res.data
  },
  onLoad: async function (options) {
    let userInfo = await this._getUserInfo();
    let {gender,nickName,avatarUrl,city,province} = userInfo
    gender= (gender==1)?'男':'女'
    console.log(userInfo)
    this.setData({
      avatarUrl,gender,nickName,
      city,province
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