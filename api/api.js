const baseUrl = 'http://192.168.0.103:9001/v1'

export default (url, method, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl}${url}`,
            method: `${method}` || GET,
            data: data || {},
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