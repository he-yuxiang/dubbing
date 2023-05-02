// index.js
Page({
    data: {
        value: '',
        show: false,
        size: {
            maxHeight: 200,
            minHeight: 150
        },

    },
    toSet() {
        this.setData({
            show: true
        })
    },
    toSetDubbing() {
        console.log(11);
        wx.navigateTo({
            url: '../../pages/setDubbing/setDubbing'
        })
    },
    exitSet() {
        this.setData({
            show: false
        })
    },
    onChange(event) {
        wx.showToast({
            icon: 'none',
            title: `当前值：${event.detail}`,
        });
    },
})