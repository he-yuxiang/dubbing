const baseUrl = 'https://wechat-blue.docs4dev.com/v1'

export default (url, method, data, token) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl}${url}`,
            method: `${method}` || GET,
            data: data || {},
            header: {
                "Authorization": `Bearer ${token}`
            },
            success: function (res) {
                const { data, statusCode } = res;
                if (statusCode >= 200 && statusCode < 400) {
                    resolve(data);
                } else {
                    reject(data);
                }
            },
            fail: function (e) {
                reject(e);
            }
        })
    })
}