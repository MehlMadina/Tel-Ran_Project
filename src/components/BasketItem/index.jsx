import React from 'react'

export default function BasketItem({ id, title, price, discont_price, image, count }) {

 const src_img = `http://localhost:3333${image}`;

  return (
    <div>
        <img src={src_img} alt={title} />
        <div>
            <button>-</button>
            <button>+</button>
        </div>
        <p>{discont_price * count}$</p>
        <p>{price * count}$</p>
        <p>{count}</p>
    </div>
  )
}
