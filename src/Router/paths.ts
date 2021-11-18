import { Main } from '../views'

export const routes = {
    MAIN: '/',
    PRODUCT: '/product/:id'
}

export default [
    {
        path: routes.MAIN,
        component: Main,
        exact: true
    },

]
