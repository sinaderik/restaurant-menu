import { React, useState, useEffect } from 'react'
import menuList from '../data';

export default function Menu({ itemCategory }) {
  console.log("menu component")

  const [category, setCategory] = useState(itemCategory)
  useEffect(() => {
    setCategory(itemCategory);
    console.log("menu component useEffect")
  }, [itemCategory]);

// const x=()=>{
//   return menuList.map(item => {
//     return <article key={item.id} className="menu-item">
//       <img src={item.img} className="photo" />
//       <div className="item-info">
//         <header>
//           <h4>{item.title}</h4>
//           <h4 className="price">${item.price}</h4>
//         </header>
//         <p className="item-text">{item.desc}</p>
//       </div>
//     </article>
//   })
// }

  const FilteredItems = () => {
    return menuList.filter(item => item.category === category).map(item => {
      return <article key={item.id} className="menu-item">
        <img src={item.img} className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    })
  }

  return (
    <div className="section-center">
      <FilteredItems />
      {category === "all" ? (
        menuList.map(item => {
          return <article key={item.id} className="menu-item">
            <img src={item.img} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        })
     ): ""}
    </div>
  )
}
