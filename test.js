// 判断用户名是否合法 合法返回true 不合法返回false
function checkUserName (userName) {
  const reg = /^[a-zA-Z0-9_]{3,16}$/
  return reg.test(userName)
}
console.log(checkUserName('123'))
console.log(checkUserName('12345678901234567890123456'))
console.log(checkUserName('1234567890123456789012345'))
