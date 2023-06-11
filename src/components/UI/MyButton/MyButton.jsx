import React, { useEffect } from 'react'
import st from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  
  return (
    <button {...props} className={st.btn}>
        {children}
    </button>
  )
}

export default MyButton