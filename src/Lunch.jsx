import React from 'react'
import Nav from './Nav'

function Lunch() {
  const menu = [
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
]
return (
  <>
  {menu.map((pack)=>{
    const {id,title,category,price,img,desc} = pack;
    return(
    <div className="main1 pt-20 bg-zinc-700" key={id}>
        <div className="het w-[700px] bg-black text-white hover:bg-blue-300 hover:text-black">
            <div className="ww flex">
                <img
                src={img}
                alt="" 
                className='m-2 object-cover w-[300px] rounded-md border-[3px] border-blue-500'
                />
                <h2 className='text-xl pl-4'>{title}</h2>
                <p className='pl-20'>{price}</p>
                <p className='mt-20 w-[200px] ml-[-200px]'>{desc}</p>
            </div>
            
        </div>

    </div>
    )
  })}
  </>
  )
}
export default Lunch
