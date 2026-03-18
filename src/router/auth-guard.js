
const isAuthenticatedGuard = (to, from, next) => {

    return new Promise((resolve) => {
        const random = Math.random() * 100

        if (random > 50){
            console.log(random, 'Acceso permitido - isAuthenticatedGuard')
            next() // Permite la navegación a la ruta destino
        } else{
            console.log(random, 'Acceso denegado - isAuthenticatedGuard')
            next({name: 'pokemon-home'}) // Redirige a la ruta 'pokemon-home' si el acceso es denegado
        }
    })

}

export default isAuthenticatedGuard