import {get,post,del,put} from '../utils/request'

//获取商品
export function loadCategoreies(page = 1){
    return get('/api/v1/admin/products',{page})
}

//获取商品信息
export function loadCategory(id){
    return get('/api/v1/admin/products',id)
}

//新增商品
export function increaseOne(data){
    return post('/api/v1/admin/products',data)
}

//删除商品信息
export function DelOne(id,data){
    return del('/api/v1/admin/products/'+id,data)
}

//修改商品商品
export function amendOne(id){
    return put('/api/v1/admin/products/')
}