

<template>
    <div class="testProps">
        <Com :option="option">

        </Com>

    </div>
</template>
    
<script>
import Com from './com.vue'

export default {
    name: 'app',
    components: {
        Com
    },
    data() {
        return {
            option:{
                obj:{name:'希斯特利亚'},
                // arr:[]
            }
        }
    },
    methods: {

    }
}
</script>
    
<style scoped>
.testProps {}
</style>
    