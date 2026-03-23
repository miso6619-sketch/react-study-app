import React from 'react'

export default function Mainimg({title, desc}) {
  return (
    <div className="mainImg">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}
