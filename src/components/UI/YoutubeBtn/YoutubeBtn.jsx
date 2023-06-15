import React from 'react'
import st from './YoutubeBtn.module.css'

const YoutubeBtn = ({children, url, ...props}) => {
  return (
    <a href={url} className={st.button} {...props} target='_blank'>{children}</a>
  )
}

export default YoutubeBtn