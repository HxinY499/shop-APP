import axios from 'axios'


export function request(config) {

    const instance = axios.create({
        baseURL: ''
    })

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(result => {
        return result.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}