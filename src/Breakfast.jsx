import React from 'react'



function Breakfast() {
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
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


export default Breakfast
