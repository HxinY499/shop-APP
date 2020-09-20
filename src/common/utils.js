//防抖函数，防止重复调用
export function debounce(func, delay = 500) {
    let timer = null
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            // console.log('===')
            func.apply(this, args)
        }, delay)
    }
}