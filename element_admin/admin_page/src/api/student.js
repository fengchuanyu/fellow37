import request from '@/utils/request'

export function addStudent(data) {
  return request({
    url: '/student/add',
    method: 'post',
    data
  })
}

export function getStudent(params) {
  return request({
    url: '/student/list',
    method: 'get',
    params
  })
}