// pages/setDubbing/setDubbing.js
import api from '../../api/api.js'
const options = [
    {
        text: '中文',
        value: 'zh_CN',
        children: [
            { text: '普通话', value: 'zh_CN/putonghua' },
            { text: '四川方言', value: 'zh_CN/sichuanhua' },
            { text: '东北方言', value: '330300' },
            { text: '台湾方言', value: '330400' },
            { text: '粤语', value: '330500' },
        ],
    },
    {
        text: '外语',
        value: 'en_waiyu',
        children: [
            { text: '英文', value: 'en_US' },
            { text: '日语', value: 'ja_JP' },
            { text: '德语', value: '320300' },
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
        configs: {},
        title: 'myvoice',
        setAge: '',
        setGender: '',
        radio: '',
        filter: {
            agegroup: {
                "name": "年龄段",
                children: [
                    {
                        "name": "童声",
                        "code": "children"
                    },
                    {
                        "name": "青年",
                        "code": "youth"
                    },
                    {
                        "name": "中年",
                        "code": "middle_age"
                    }
                ]
            },
            gender: {
                name: "性别",
                children: [
                    {
                        "name": "男",
                        "code": "male"
                    },
                    {
                        "name": "女",
                        "code": "female"
                    },
                    {
                        "name": "中性",
                        "code": "neutral"
                    }
                ]
            },
            language: {
                name: "语言",
                children: [
                    {
                        "name": "中文",
                        "code": "zh_CN",
                        children: [
                            {
                                "name": "普通话",
                                "code": "zh_CN/putonghua"
                            },
                            {
                                "name": "四川话",
                                "code": "zh_CN/sichuanhua"
                            }
                        ]
                    },
                    {
                        "name": "英文",
                        "code": "en_US"
                    },
                    {
                        "name": "日语",
                        "code": "ja_JP"
                    }
                ]
            }
        },
        all: [],
        myvoice: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getConfigs()

    },
    async getConfigs() {
        let token = wx.getStorageSync('token')
        let result = await api('/system/configs', 'GET', null, token)
        this.setData({
            configs: result[4],
            all: result[4].value.all,
            myvoice: result[4].value.myvoice
        })
    },
    titleOnChange(event) {
        wx.showToast({
            title: `切换到标签 ${event.detail.name}`,
            icon: 'none',
        });
        if (event.detail.title === '收藏') {
            this.setData({
                title: 'myvoice'
            })
        } else if (event.detail.title === '全部') {
            this.setData({
                title: 'all'
            })
        }
    },
    setAgeChange(event) {
        let newAgegroup = this.data.configs.value.all.filter((item) => {
            return item.age_group.code == event.detail & item.gender.code == this.data.setGender & item.language.code == this.data.cascaderValue
        })
        this.setData({
            all: newAgegroup,
            setAge: event.detail
        })
    },
    setGenderChange(event) {
        let newAgegroup = this.data.configs.value.all.filter((item) => {
            return item.gender.code == event.detail & item.age_group.code == this.data.setAge & item.language.code == this.data.cascaderValue
        })
        this.setData({
            all: newAgegroup,
            setGender: event.detail
        })

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
            show: false
        })
        let newAgegroup = this.data.configs.value.all.filter((item) => {
            return item.language.code == value & item.gender.code == this.data.setGender & item.age_group.code == this.data.setAge
        })
        this.setData({
            all: newAgegroup,
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