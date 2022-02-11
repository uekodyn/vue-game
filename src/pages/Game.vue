<template>
<div class="game">
    <span>teste</span>
    <div class="tokens" >
        <Token v-for="tokenInfo in tokens" :key="tokenInfo.name" v-bind="tokenInfo"/>

    </div>
    <RulesButton />
    <BackButton />
</div>
</template>

<script>
import Token from '../components/Token/Token.vue';
import RulesButton from '@/components/Buttons/Rules.vue';
import BackButton from '@/components/Buttons/Back.vue';

export default {
    name: "Game",
    components: {
        Token,
        RulesButton,
        BackButton,
    },
    data() {
        return {
            tokens: [
                { name: 'scissors', src: require('@/assets/icon-scissors.svg') },
                { name: 'paper', src: require('@/assets/icon-paper.svg') },
                { name: 'rock', src: require('@/assets/icon-rock.svg') },
                { name: 'lizard', src: require('@/assets/icon-lizard.svg') },
                { name: 'spock', src: require('@/assets/icon-spock.svg') },
            ],
        };
    },
};
</script>