import request from '@/configs/request'

/**
 * @description
 */
export type CatType = 1 | 2 | 3

/**
 * 获取catInfo
 * @description 获取 cat info
 * @param type
 * @returns
 */
export function getCatInfoAPI(type: CatType): Promise<string> {
  return request({
    url: 'getCatInfo',
    method: 'get',
    params: { type },
  })
}
