import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./AutoParts/images/category/cat2.png",
      cateName: "Body Parts",
    },
    {
      cateImg: "./AutoParts/images/category/cat2.png",
      cateName: "Lighting",
    },
    {
      cateImg: "./AutoParts/images/category/cat3.png",
      cateName: "Suspension",
    },
    {
      cateImg: "./AutoParts/images/category/cat4.png",
      cateName: "Air Conditioning",
    },
    {
      cateImg: "./AutoParts/images/category/cat5.png",
      cateName: "Brake System",
    },
    {
      cateImg: "./AutoParts/images/category/cat6.png",
      cateName: "Oils & Fluids",
    },
    {
      cateImg: "./AutoParts/images/category/cat7.png",
      cateName: "Engine Parts",
    },
    {
      cateImg: "./AutoParts/images/category/cat8.png",
      cateName: "Electrical",
    },
    {
      cateImg: "./AutoParts/images/category/cat9.png",
      cateName: "Steering",
    },
    {
      cateImg: "./AutoParts/images/category/cat11.png",
      cateName: "Wheels & Tyre",
    },
    {
      cateImg: "./AutoParts/images/category/cat10.png",
      cateName: "Belt & Chain Drive",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
