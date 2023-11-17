import { React, useState,memo } from 'react'

function Categories({ items,categoryChanger }) {
  const [clickBtn, setClickBtn] = useState("all");

  const categoryHandler=(item)=>{
    categoryChanger(item)
    setClickBtn(item)
  }

  return (
    <div className="btn-container" style={{ marginTop: "0.5rem" }}>
      {items.map((item, index) => {
        return <button
          onClick={() => categoryHandler(item)}
          key={index}
          className={clickBtn === item ? "filter-btn highlight" : "filter-btn"}>{item}</button>
      })}
    </div>
  );
}

export default memo(Categories)