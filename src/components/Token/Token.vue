<template>
    <button class="token" :class="name" >
        <img :src="src" :alt="name" class="token-image">
    </button>
</template>

<script>
import VueTypes from 'vue-types';
export default {
    name: "Token",
    props: {
        name: VueTypes.string.isRequired,
        src: VueTypes.string.isRequired,
    },
};
</script>

<style lang="scss" scoped>

</style>