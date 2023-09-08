export function buildFormData(query: any) {
  const bodyFormData = new FormData()
  for (const k in query) {
    bodyFormData.set(k, query[k])
  }
  return bodyFormData
}

export function scroll2end(el: any) {
  // HTMLElement.offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。
  const window_height = el.offsetHeight
  // Element.scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
  const content_height = el.scrollHeight

  // 判断是否触底
  const c = el.scrollTop
  if (c >= content_height - window_height) {
    return true
  }
}
/**
 *
 * @param {*} arr1 需要过被滤出的数组
 * @param {*} arr2 参考数组，判断arr1的元素是否过滤提出
 * @param {*} cb  callback函数，cb(arr1元素，arr2元素)。 返回true 不提出arr1元素，false 提出arr1元素
 * @returns  返回值  { include: [], exclusive: [] }
 */
export const filterArr1ByArr2 = (arr1: any, arr2: any, cb: any) => {
  const exclusiveArr: any = []
  const includeArr: any = []
  for (let index = 0; index < arr1.length; index++) {
    const item = arr1[index]
    let unfindItem = undefined
    unfindItem = arr2.find((element: any) => {
      return cb(item, element)
    })
    if (unfindItem === undefined) {
      exclusiveArr.push(item)
    } else {
      includeArr.push(item)
    }
  }
  return new Promise((resolve) => {
    resolve({
      include: includeArr,
      exclusive: exclusiveArr,
    })
  })
}

// 浏览器标识通过数组返回
const getUserAgent = () => {
  const { userAgent } = navigator
  let left = 0
  const arr = []
  for (let i = 0; i < userAgent.length; i++) {
    if (userAgent[i] === ' ') {
      left = i
    } else if (userAgent[i] === '/' && left) {
      arr.push(userAgent.slice(left + 1, i))
    }
  }
  // 搜狗浏览器格式特殊
  if (userAgent.includes('MetaSr')) {
    arr.push('MetaSr')
  }
  return arr.slice(1)
}
const broswerIdMap: any = {
  QQ浏览器: ['Chrome', 'Safari', 'Core', 'QQBrowser'],
  Chrome浏览器: ['Chrome', 'Safari'],
  Edge浏览器: ['Chrome', 'Safari', 'Edg'],
  搜狗浏览器: ['Chrome', 'Safari', 'MetaSr'],
  Safari浏览器: ['Version', 'Safari'],
  Firefox浏览器: ['Gecko', 'Firefox'],
  '2345浏览器': ['Chrome', 'Safari', '2345Explorer'],
}

// 获取当前登录浏览器
export const getCurBroswer = () => {
  let broswer = null
  const broswerList: string[] = Object.keys(broswerIdMap)
  const curAgent = getUserAgent()
  for (let i = 0; i < broswerList.length; i++) {
    if (curAgent.toString() === broswerIdMap[broswerList[i]].toString()) {
      broswer = broswerList[i]
      return broswer
    }
  }
  return '其他浏览器'
}

export const getUuid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}

// 从尺寸角度 判断是否是移动端
export function isMobile() {
  return window.innerWidth < 1024
}

// 获取项目根路径下的图片
export const getLocalImageUrl = (name: string) => {
  // 里面可以根据需求写逻辑
  return new URL(name, import.meta.url).href
}

export function isValidatePassword(secretKey128: string) {
  const matcher = new RegExp('(?=.*[0-9]).{6,16}')
  // const matcher = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}')
  return matcher.test(secretKey128)
}
export function isValidateEmail(Email: string) {
  if (
    Email.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1
  ) {
    return true
  } else {
    return false
  }
}
