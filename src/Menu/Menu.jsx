import { React, useState, useEffect, useMemo } from 'react'
import menuList from '../data';

export default function Menu({ itemCategory }) {

  // const [category, setCategory] = useState(itemCategory);
  const [menu, setMenu] = useState(menuList)
  useEffect(() => {
    if(itemCategory==="all"){
      setMenu(menuList)
      return
    }
    const filteredMenu=menuList.filter(item=>item.category===itemCategory);
    setMenu(filteredMenu)

  }, [itemCategory]);


  return (
    <div className="section-center">
        {menu.map(item => {
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
        })}
    </div>
  )
}
