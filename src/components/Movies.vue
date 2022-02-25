<template>
    <ul>
        <li v-for="(item, index) in movies" v-bind:key="index">
            <img :src="imageUrl + item.poster_path" alt="">
            <section>
                <h3>{{ item.original_title }}</h3>
                <p>{{ item.overview }}</p>
                <button v-if="favorites" @click="addToFavourite(index)">Добавить в избранное</button>
            </section>
        </li>
    </ul>
    
</template>

<script>


export default {
    data() {
        return {
            imageUrl: 'https://image.tmdb.org/t/p/w342',
            
        }
    },
    props: {
        movies: {
            type: Array,
        }
    },
    computed: {
        favorites() {
            return this.$route.path != '/favorites';
        }
    },
    methods: {
        addToFavourite(index) {
            this.$store.dispatch('addFavorites', index);
        }
    },

}
</script>