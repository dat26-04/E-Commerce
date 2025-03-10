import { lazy } from "react";

const routers = [
    {
        path: "/",
        component: lazy(() => import("@components/Home/Home"))
    },
    // {
    //     path: "/blog",
    //     component: lazy(() => import(""))
    // }
]

export default routers;