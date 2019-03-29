<template>
    <ul>
        <li v-for="item in movies" v-bind:key="item">
            <img :src="imageUrl + item.poster_path" alt="">
            <section>
                <h3>{{ item.original_title }}</h3>
                <p>{{ item.overview }}</p>
                <button @click="addFavorites">Добавить в избранное</button>
            </section>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            imageUrl: 'https://image.tmdb.org/t/p/w342',
        }
    },
    methods: {
        addFavorites() {
            this.$store.dispatch('loadIdFavorites');
        }
    },
    computed: {
        ...mapGetters(['movies']),
    },
}
</script>