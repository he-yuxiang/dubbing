// pages/user/user.js
import api from "../../api/api";
import Toast from '@vant/weapp/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: true,
        radio: '1',
        showChange: true,
        showShare: false,
        options: [
            [
                { name: '微信', icon: 'wechat' },
                { name: '朋友圈', icon: 'wechat-moments' },
                { name: '微博', icon: 'weibo' },
                { name: 'QQ', icon: 'qq' },
            ],
            [
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
                { name: '小程序码', icon: 'weapp-qrcode' },
            ],
        ],
        configs: [],
        userInfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getConfigs()
        this.getUserInfo()
    },
    async getUserInfo() {
        let token = wx.getStorageSync('token')
        let result = await api('/users/me', 'GET', null, token)
        this.setData({
            userInfo: result,
        })
    },
    async getConfigs() {
        let token = wx.getStorageSync('token')
        let result = await api('/system/configs', 'GET', null, token)
        this.setData({
            configs: result,
        })
    },
    async onChangeCheckIn(event) {
        let token = wx.getStorageSync('token')
        this.setData({
            showChange: false
        })
        try {
            await api('/users/me/events', 'POST', { "event": "check_in" }, token)
            this.setData({
                radio: event.detail,
                showChange: true
            });
            Toast('签到成功!');
        } catch (error) {
            this.setData({
                showChange: true
            })
            Toast(error.message);
        }

    },
    share() {
        this.setData({
            showShare: true
        })
    },

    onClose() {
        this.setData({ showShare: false });
    },


    onChange({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked: detail });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})