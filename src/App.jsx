import { React, useState, useEffect, useLayoutEffect,useCallback } from 'react'
import Categories from '../src/Categories/Categories.jsx'
import Menu from "./Menu/Menu"
import menuList from '../src/data';

const arrayOfCategories = ["all",...new Set(menuList.map(item => item.category))];
export default function App() {

  const [menuItems, setMenuItems] = useState(arrayOfCategories)
  const [categoryName, setCategoryName] = useState("all")

  const categoryHandler=useCallback((category)=>{
    setCategoryName(category)
  })
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories categoryChanger={categoryHandler} items={menuItems} />
        </div>
        <div className=''>
          <Menu itemCategory={categoryName}/>
        </div>
      </section>
    </main>
  )
}
