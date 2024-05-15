import React from 'react'
import Nav from './Nav'

function Shakes() {
  const menu = [
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
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

export default Shakes
