import defaultImg from '../assets/image/NC.jpg'


export function getToken() {
    return localStorage.getItem('token')
}

export function setToken(token) {
    localStorage.setItem('token', token)
}

export function isLogined() {
    if (getToken()) {
        return true
    } else {
        return false
    }
}

export const servenURL = 'http://localhost:3009'

export const UplodURL = servenURL + '/api/v1/common/file_upload'
// 图片处理
export function delImg(img) {
    if (img) {
        if (img.startsWith('http')) {
            return img
        } else {
            return servenURL + img
        }
    } else {
        return defaultImg
    }
}