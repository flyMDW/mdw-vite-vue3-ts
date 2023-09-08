export type LoginInfo = {
  avatar: string
  id: number
  username: string
  gender: 0 | 1 | 2 // 0:未知 1:男 2:女
  natinalityCode: string // 国籍
  registerDate: string // 注册时间
  expiration: string // 过期时间
}

export type UserInfo = {
  avatar: string // 头像
  address: string // 地址
  birthday: string // 生日
  email: string // 邮箱
  name: string // 姓名
  nickname: string // 用户名
  mobile: string // 手机号
  statue: number // 状态 0:未激活 1:正常 2:冻结
}
