import { Main, Product } from '../views'

export const routes = {
    MAIN: '/',
    PRODUCT: '/product/:id'
}

export default [
    {
        path: routes.MAIN,
        element: Main,
        exact: true
    },
    {
        path: routes.PRODUCT,
        element: Product,
        exact: true
    },

]
