import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

// Aquí se importarían los componentes que se van a usar en las rutas si no usamos el LazyLoad
// import AboutPage from '@/modules/pokemon/pages/AboutPage'
// import ListPage from '@/modules/pokemon/pages/ListPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import NoPageFound from '@/modules/shared/pages/NoPageFound'

const routes = [
    {
        path: '/',
        redirect: '/pokemon',
    },

    {
        // Pokemon Layout
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        
        children: [
            { 
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
            },
            { 
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
            },
            {   // Ruta /id del pokemon POR ARGUMENTO QUERY
                path: 'pokemonid/:id',    
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = Number(route.params.id)
                    // Si el id no es un número, redirigimos al pokemon con id 1 (Bulbasaur) si lo es lo convertimos a número y lo pasamos como prop al componente PokemonPage
                    return isNaN( id ) ? { id: 1 } : { id: id }
                }
            }, 
            {
                path: '',
                name: 'pokemon-redirect',
                redirect: { name: 'pokemon-about' },
            },
        ]
    },
    {
        // DBZ Layout
        path: '/dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),

        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DbzCharactersPage" */ '@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DbzAboutPage" */ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                name: 'dbz-redirect',
                redirect: { name: 'dbz-characters' },
            },
        ]
    },

    {   // Cualquier url que no hayamos creado redirige a la página de NoPageFound
        path: '/:pathMatch(.*)*',   
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    },

    // { 
    //     path: '/home',
    //     name: 'home',
    //     component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
    // },
    // { 
    //     path: '/about',
    //     name: 'about',
    //     component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
    // },
    // {   // Ruta /id del pokemon POR ARGUMENTO QUERY
    //     path: '/pokemonid/:id',    
    //     name: 'pokemon-id',
    //     component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
    //     props: (route) => {
    //         const id = Number(route.params.id)
    //         // Si el id no es un número, redirigimos al pokemon con id 1 (Bulbasaur) si lo es lo convertimos a número y lo pasamos como prop al componente PokemonPage
    //         return isNaN( id ) ? { id: 1 } : { id: id }
    //     }
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Guard global síncrono - Antes de cada cambio de ruta se ejecuta esta función
// router.beforeEach((to, from, next) => {
//     console.log({ to, from, next })

    // const random = Math.random() * 100

    // if (random > 50) {
    //     console.log(random, 'Acceso permitido')
    //     next() // Permite la navegación a la ruta destino
    // } else {
    //     console.log(random, 'Acceso denegado')
    //     next({ name: 'pokemon-home' }) // Redirige a la ruta 'pokemon-home' si el acceso es denegado
    // }
// })

// Guard global asíncrono - Antes de cada cambio de ruta se ejecuta esta función
// const canAccess = () => {
//     return new Promise((resolve) => {
//         const random = Math.random() * 100

//         if (random > 50) {
//             console.log(random, 'Acceso permitido - canAccess')
//             resolve(true) // Permite la navegación a la ruta destino
//         } else {
//             console.log(random, 'Acceso denegado - canAccess')
//             resolve(false) // Deniega la navegación a la ruta destino
//         }
//     })
// }

// router.beforeEach(async (to, from, next) => {
//     const access = await canAccess()
    
//     access
//         ? next() // Permite la navegación a la ruta destino
//         : next({ name: 'pokemon-home' }) // Redirige a la ruta 'pokemon-home' si el acceso es denegado
// })

export default router