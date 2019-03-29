<template>
    <ul>
        <li v-for="item in movies">
            <img :src="imageUrl + item.poster_path" alt="">
            <section>
                <h3>{{ item.original_title }}</h3>
                <p>{{ item.overview }}</p>
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
    computed: {
        ...mapGetters(['movies']),
    },
}
</script>