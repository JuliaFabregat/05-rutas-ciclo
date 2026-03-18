<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">
        Cambiar nombre
    </button>
</template>

<script>

export default {
    
    data() {
        return {
            name: 'Fernando',
        }
    },
    methods: {
        onChangeName() {
            this.name = 'Melissa';
        }
    },

    // LifeHook cycle del COMPONENTE ENTERO - Si tenemos setup sería CompositionAPI
    // Propiedades reactivas: data, props, computed, watch, etc
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
        // Peticiones HTTP
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
        // Limpieza de componentes
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>
