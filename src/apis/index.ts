import request from '@/configs/request'

/**
 * @description 地址类型：1 头像（学生） 2 口语自我介绍（学生）
 */
export type TutorPresignedUrlType = 3 | 4 | 5 | 6

/**
 * 获取预签名上传地址
 * @description 上传步骤：1.取预签名上传地址 2.使用http PUT，将文件PUT到指定目录 3.上传成功后，将地址保存到指定字段
 * @param type  地址类型：1 头像（学生） 2 口语自我介绍（学生）3 头像（老师）
 * @returns
 */
export function getPresignedUrlAPI(type: TutorPresignedUrlType): Promise<string> {
  return request({
    url: 'presignedUrl',
    method: 'get',
    params: { type },
  })
}
