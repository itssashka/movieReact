import React from 'react'
import st from './NavMenu.module.css'
import NavMenuSVG from './NavMenuSVG'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className={st.nav_menu}>
        <Link to="/top250" className={st.nav_item}>
            <NavMenuSVG name="cupSVG" />
            ТОП-250
        </Link>
        <a href="#" className={st.nav_item}>
            <NavMenuSVG name="windowSVG" />
            Сериалы
        </a>
        <a href="#" className={st.nav_item}>
            <NavMenuSVG name="fireSVG" />
            Смотрят сейчас
        </a>
    </div>
  )
}

export default NavMenu