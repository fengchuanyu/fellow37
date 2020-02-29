import request from '@/utils/request'

export function addStudent(data) {
  return request({
    url: '/student/add',
    method: 'post',
    data
  })
}