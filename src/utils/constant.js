export const API_URL =
  process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000'

// 获取地址栏url参数
export const getUrlParam = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)

  if (r !== null) return unescape(r[2])
  return ''
}
