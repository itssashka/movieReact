import React from "react"
import TopFilms from "../Pages/TopFilms"
import Login from "../Pages/Login"
import Reg from "../Pages/Reg"
import RegSuccess from "../Pages/RegSuccess"
import FilmPage from "../Pages/FilmPage"
import Search from "../Pages/Search"
import Account from "../Pages/Account"

export const publicRoutes = [
    {path: '/top250', component: TopFilms},
    {path: '/login', component: Login},
    {path: '/reg', component: Reg},
    {path: '/reg/success', component: RegSuccess},
    {path: '/film/:id', component: FilmPage},
    {path: '/search/:request', component: Search},
]

export const privateRoutes = [
    {path: '/top250', component: TopFilms},
    {path: '/film/:id', component: FilmPage},
    {path: '/search/:request', component: Search},
    {path: '/account', component: Account},
]