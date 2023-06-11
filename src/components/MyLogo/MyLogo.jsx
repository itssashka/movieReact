import React from 'react'
import MySVG from '../MySVG/MySVG'
import st from './MyLogo.module.css'
import { Link } from 'react-router-dom'

const MyLogo = () => {
  return (
    <Link className={st.logo} to="/top250">
        <MySVG name="logoSVG"/>
        <div>showy</div>
    </Link>
  )
}

export default MyLogo