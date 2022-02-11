<template>
<button class="back" @click="$router.back()">BACK</button>
</template>

<script>

export default {
    name: "BackButton",
};
</script>


<style lang="scss" scoped>
    .back {
        text-decoration: none;
        font-size: rfs(1.25rem);
        color: $white;
        letter-spacing: 2px;
        margin-top: rfs(50px);
        background: none;
        border: none;
        cursor: pointer;

        &:hover,
        &:focus {
            outline: none;
            text-decoration: underline;
        }
    }

</style>