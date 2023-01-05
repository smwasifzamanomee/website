import React from 'react'

const Container = ({height, className, width ,bgColor, children}) => {
  return (
    <section className={`w-full py-10 ${bgColor} ${width} ${height} ${className}`}>
        <div className="container mx-auto px-4">
        {children}
        </div>
    </section>
  )
}

export default Container