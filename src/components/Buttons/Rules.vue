<template>
    <router-link to="/rules" class="rules">RULES</router-link>
</template>

<script>
export default {
    name: "RulesButton",
};
</script>

<style lang="scss" scoped>

    .rules {
    font-size: rfs(1.5rem);
    text-align: center;
    text-decoration: none;
    border: 3px solid $header-outline;
    border-radius: 10px;
    padding: rgs(5px 10px);
    width: 150px;
    color: $white;
    font-weight: 500;
    margin-top: rgs(50px);
    transition: background .3s linear;

    &:hover,
    &:focus {
        outline: none;
        background: $header-outline;
    }
}
</style>