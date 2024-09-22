import React from 'react'


const Container = ({children, className}) => {
  return (
    <div className='mx-auto max-w-6xl xl:max-w-7xl px-8'>
        {children}
        </div>
  )
}

export default Container