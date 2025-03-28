import { lazy } from "react";

const routers = [
    {
        path: "/",
        component: lazy(() => import("@components/Home/Home"))
    },
    {
        path: "/shop",
        component: lazy(() => import("@pages/OurShop/OurShop"))
    },
    {
        path: "/cart",
        component: lazy(() => import("@pages/Cart/Cart"))
    }
]

export default routers;