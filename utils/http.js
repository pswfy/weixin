import { config } from '../../config.js';
/**错误码 */
const tips = {
  1: "错误",
  1005: "appket无效",
  3000: "期刊不存在"
}
/**调用接口的类 */
//HTTP类
class HTTP {
//方法(require)，一个叁数(对象)
  require(params) {
    //如果params.method：为空，默认是GET
    if (!params.method) {
      params.method = "GET";
    }
    //微信数据请求
    wx.request({
      url: config.api_base_url + params.url,//url
      method: params.method,//请求类型
      data: params.data,//数据
      header: {//请求头
        "contant-type": "application/json",
        "appkey": config.appKey
      },
      //成功的
      success: (res) => {
        let code = res.statusCode.toString();//相应代码
        if (code.startsWith('2')) {//以2开头的
          params.success && params.success(res.data);//params.success有且向对象中存储请求的值
        } else {//不一2开头就是错误情况
          let error_code = res.data.error_code;//错误相应代码
          this._show_error(error_code);//调用错误提示对象，一个叁数
        }

      },
      //错误
      fail: (err) => {
        this._show_error(1);
      }

    })
  };
  /*错误的私有方法*/
  _show_error(error_code) {
    //叁数没有的情况  =》 1
    if (!error_code) {
      error_code = 1;
    };
    const tip = tips[error_code];//key -> 获取values
    wx.showToast({//wx 提示
      title: tip ? tip : tips[1],//title---msg
      icon: 'none',//icon
      duration: 2000//时间
    });
  };
}

export { HTTP }