<template>
    <h1>Pokemon: #<span>{{ id }}</span></h1>
    <div v-if="pokemon">
        <h2>{{ pokemon?.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Pokemon Image">
    </div>
    <!-- <h1>Pokemon: #<span>{{ $route.params.id }}</span></h1> -->

</template>

<script>

export default {

    props: {
        id: {
            type: Number,
            required: true
        },
    },

    data() {
        return {
            // id: this.$route.params.id,
            pokemon: null
        }
    },
    
    created() {
        this.getPokemon();
        // const { id } = this.$route.params;
        // console.log(id);
        // this.id = id;
    },

    methods: {
        async getPokemon() {

            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(  resp => resp.json())

                console.log(pokemon);
                this.pokemon = pokemon;
            } catch (error) {
                this.$router.push('/');
                console.log('No se encontró el pokemon');
            }

        }
    },
    watch: {
        id() {
            this.getPokemon();
        }
    }
}
</script>