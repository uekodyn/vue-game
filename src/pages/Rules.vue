<template>
    <div class="rules">
        <h1 class="title">RULES</h1>
        <img src="@/assets/image-rules-bonus.svg" alt="Game Rules" class="image">
        <BackButton />
    </div>
</template>

<script>
import BackButton from '@/components/Buttons/Back.vue'

export default {
    name: "Rules",
    components: {
        BackButton,
    },
};
</script>

<style lang="scss" scoped>
    .rules {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;

        .title {
            color: $white;
            letter-spacing: 2px;
        }

        .image {
            width: 55%;
            margin-top: rfs(50px);

            @media (max-width: 750px) {
                width: 80%;
            }
        }
    }

</style>