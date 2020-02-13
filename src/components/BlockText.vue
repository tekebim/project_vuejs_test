<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <p>
            <slot name="content"></slot>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'BlockText',
    }
</script>
<style lang="scss" scoped>

</style>
