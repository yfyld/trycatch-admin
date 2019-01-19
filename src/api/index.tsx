import fetch from './http';
import { from } from 'rxjs';
// 全局

export function fetchUserInfo(params?: object) {
  return from(fetch.get('/user/info', params))
}
export function fetchLogin(params?: object) {
  return from(fetch.post('/user/login', params))
}
export function fetchSignup(params?: object) {
  return from(fetch.post('/user/signup', params))
}
export function fetchUserList(params?: object) {
  return from(fetch.get('/user/list', params))
}

// 项目
export function fetchProjectList(params?: object) {
  return from(fetch.get('/project', params))
}

export function fetchProjectInfo(projectId:number,params?: object) {
  return from(fetch.get(`/project/${projectId}`, params))
}

export function fetchProjectUpdate(projectId:number,params?: object) {
  return from(fetch.put(`/project/${projectId}`, params))
}

export function fetchProjectDel(projectId) {
  return from(fetch.delete(`/project/${projectId}`))
}

export function fetchProjectAdd(params?: object) {
  return from(fetch.post(`/project`, params))
}

// 错误
export function fetchErrorChartData(params?: object) {
  return from(fetch.get(`/error/by-date`, params))
}

export function fetchErrorListData(params?: object) {
  return from(fetch.get(`/error/list`, params))
}

export function fetchErrorStatusUpdate(errorId:number,params?: object) {
  return from(fetch.post(`/error/${errorId}`, params))
}

export function fetchErrorInfo(errorId: number) {
  return from(fetch.get(`/error/${errorId}`))
}

export function fetchErrorEventList(errorId: number,params:any) {
  return from(fetch.get(`/error/${errorId}`,params))
}