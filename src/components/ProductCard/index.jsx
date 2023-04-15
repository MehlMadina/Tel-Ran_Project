import React from 'react'

export default function ProductCard({ id, title, image, price }) {

    const src_img = `http://localhost:3333${image}`

  return (
    <div>
        <img src={src_img} alt={title} />
        <p>{title}</p>
    </div>
  )
}
