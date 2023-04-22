import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./AutoParts/images/category/cat-1.png",
      cateName: "GoMechanic",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "JK Tyres",
    },
    {
      cateImg: "./images/category/cat-3.png",
      cateName: "Michelin Tyres",
    },
    {
      cateImg: "./images/category/cat-4.png",
      cateName: "Continental Tyres",
    },
    {
      cateImg: "./images/category/cat-5.png",
      cateName: "Goodyear Tyres",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "New Era",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>OES</h1>
          <h1>Brands</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
