import { post } from '../utils/request'

export function loginAPI(user) {
    return post('/api/v1/auth/manager_login', user)
}

