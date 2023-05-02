// pages/setDubbing/setDubbing.js
const options = [
    {
        text: '汉语',
        value: '330000',
        children: [
            { text: '普通话', value: '330100' },
            { text: '四川方言', value: '330200' },
            { text: '东北方言', value: '330300' },
            { text: '台湾方言', value: '330400' },
            { text: '粤语', value: '330500' },
        ],
    },
    {
        text: '外语',
        value: '320000',
        children: [
            { text: '英语', value: '320100' },
            { text: '德语', value: '320200' },
            { text: '日语', value: '320300' },
            { text: '韩语', value: '320400' },
        ],
    },
];
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 1,
        voices: [
            {
                name: "收藏",
                voices1: [
                    {
                        "name": "四川话1",
                        "code": "sichuan1",
                        "avatar": "http://image.jpg",
                        "preview": "http://image.wav",
                        "tag": [""]
                    },
                    {
                        "name": "四川话2",
                        "code": "sichuan2",
                        "avatar": "http://image.jpg"
                    },
                    {
                        "name": "四川话3",
                        "code": "sichuan3",
                        "avatar": "http://image.jpg"
                    }
                ]
            },
            {
                name: "全部",
                voices1: [
                    {
                        "name": "广东话1",
                        "code": "sichuan1",
                        "avatar": "http://image.jpg"
                    },
                    {
                        "name": "广东话2",
                        "code": "sichuan2",
                        "avatar": "http://image.jpg"
                    },
                    {
                        "name": "广东话3",
                        "code": "sichuan3",
                        "avatar": "http://image.jpg"
                    }
                ],
                options: [
                    {
                        text: '浙江省',
                        value: '330000',
                        children: [],
                    }
                ]
            },
            // {
            //     name: "童声",
            //     voices1: [
            //         {
            //             "name": "北京话1",
            //             "code": "sichuan1",
            //             "avatar": "http://image.jpg"
            //         },
            //         {
            //             "name": "北京话2",
            //             "code": "sichuan2",
            //             "avatar": "http://image.jpg"
            //         },
            //         {
            //             "name": "北京话3",
            //             "code": "sichuan3",
            //             "avatar": "http://image.jpg"
            //         }
            //     ]
            // },
            // {
            //     name: "卡通声",
            //     voices1: [
            //         {
            //             "name": "东北话1",
            //             "code": "sichuan1",
            //             "avatar": "http://image.jpg"
            //         },
            //         {
            //             "name": "东北话2",
            //             "code": "sichuan2",
            //             "avatar": "http://image.jpg"
            //         },
            //         {
            //             "name": "东北话3",
            //             "code": "sichuan3",
            //             "avatar": "http://image.jpg"
            //         }
            //     ]
            // }
        ],
        show: false,
        options,
        fieldValue: '',
        cascaderValue: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    onChange(event) {
        wx.showToast({
            title: `切换到标签 ${event.detail.name}`,
            icon: 'none',
        });
    },
    onChange1(e) {
        const { value } = e.detail;
        if (value === this.data.options[0].value) {
            setTimeout(() => {
                const children = [
                    { text: '杭州市', value: '330100' },
                    { text: '宁波市', value: '330200' },
                ];
                this.setData({
                    'options[0].children': children,
                })
            }, 500);
        }
    },
    onClick() {
        this.setData({
            show: true,
        });
    },

    onClose() {
        this.setData({
            show: false,
        });
    },

    onFinish(e) {
        const { selectedOptions, value } = e.detail;
        const fieldValue = selectedOptions
            .map((option) => option.text || option.name)
            .join('/');
        this.setData({
            fieldValue,
            cascaderValue: value,
        })
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