import React from 'react'
import st from './KinopoiskButton.module.css'

const KinopoiskButton = ({url}) => {
  return (
    <a href={url} className={st.button} target='_blank'>Перейти на кинопоиск</a>
  )
}

export default KinopoiskButton