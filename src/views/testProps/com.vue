<template>
    <div class="com">
        {{option}}
    </div>
</template>
    
<script>

export default {
    name: 'app',
    props: {
        option: {
            default: () => {
                return {
                    obj: {
                        name: 'hwj'
                    },
                    arr: [1, 2, 3, 4]
                }
            }
        }
    },
    data() {
        return {

        }
    },
    created() {
        console.log(this.option)
    },
    methods: {

    }
}
</script>
    
<style scoped>

</style>
    