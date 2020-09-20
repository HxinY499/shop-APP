import BackTop from "components/content/backtop/BackTop"
//回到顶部
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBack: false,
        }
    },
    methods: {
        showBackTop(position) {
            this.isShowBack = (-position.y) > 300 ? true : false
        },
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 500)
        },
    }
}