import { get, post, del, put } from '../utils/request'

//获取商品分类
export function loadCategoreies(page = 1) {
    return get('/api/v1/admin/product_categories', { page })
}

//获取商品分类信息
export function loadCategory(id) {
    return get('/api/v1/admin/product_categories', id)
}

//新增分类商品
export function increaseOne(data) {
    return post('/api/v1/admin/product_categories', data)
}

//删除商品分类信息
export function DelOne(id) {
    return del('/api/v1/admin/product_categories/' + id)
}

//修改商品分类商品
export function amendOne(id,data) {
    return put('/api/v1/admin/product_categories/',+id,data)
}