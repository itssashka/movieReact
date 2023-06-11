import React from 'react'
import st from './MySelect.module.css'

const MySelect = () => {
  return (
    <div>
        <select className={st.select}>
            <option className={st.option} value="default">Все страны</option>
            <option className={st.option} value="default">Россия</option>
            <option className={st.option} value="default">США</option>
            <option className={st.option} value="default">Китай</option>
            <option className={st.option} value="default">Франция</option>
        </select>
    </div>
  )
}

export default MySelect