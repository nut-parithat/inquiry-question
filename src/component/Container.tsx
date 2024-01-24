import React from 'react'

interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = (props) => {
  return (
    <div className='container'>
      <div className='content'>
        {props?.children}
      </div>
    </div>
  )
}

export default Container