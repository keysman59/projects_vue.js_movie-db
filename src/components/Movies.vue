<template>
    <ul>
        <li v-for="(item, index) in movies" v-bind:key="index">
        <!-- <li v-for="(index,item) in movies" v-bind:key="item"> -->
        <!-- <li v-for="item in movies"> -->
            <img :src="imageUrl + item.poster_path" alt="">
            <section>
                <h3>{{ item.original_title }}</h3>
                <p>{{ item.overview }}</p>
                <button @click="addToFavourite(index)">Добавить в избранное</button>
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
        addToFavourite(index) {
            this.$store.dispatch('loadIdFavorites', index);
        }
    },
    computed: {
        ...mapGetters(['movies']),
    },
}
</script>