import { lazy } from "react";

const routers = [
    {
        path: "/",
        component: lazy(() => import("@components/Home/Home"))
    },
    {
        path: "/shop",
        component: lazy(() => import("@pages/OurShop/OurShop"))
    }
]

export default routers;