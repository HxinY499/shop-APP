// import { Toast } from "vant";
export default {
    pushCart(state, payload) {
        payload.count = 1
        payload.isCheck = true
        let new_payload = JSON.parse(JSON.stringify(payload))
        state.cartList.push(new_payload)
    },
    incrementCount(state, payload) {
        payload.count += 1
    },
    isCheckTrue(state) {
        for (let i of state.cartList) {
            i.isCheck = true
        }
    },
    isCheckFalse(state) {
        for (let i of state.cartList) {
            i.isCheck = !i.isCheck
        }
    },

}