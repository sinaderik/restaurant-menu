import { React, useState,memo } from 'react'

export default function Categories({ items,categoryChanger }) {
  const [clickBtn, setClickBtn] = useState("");
  console.log("Categories component")

  const categoryHandler=(item)=>{
    categoryChanger(item)
    setClickBtn(item)
  }

  return (
    <div className="btn-container" style={{ marginTop: "0.5rem" }}>
      <button
        onClick={() => categoryHandler("all")}
        type="button"
        // highlight class  for highlight main category
        className={clickBtn === "all" ? "filter-btn highlight" : "filter-btn"}
      >
        All
      </button>
      {items.map((item, index) => {
        return <button
          onClick={() => categoryHandler(item)}
          key={index}
          className={clickBtn === item ? "filter-btn highlight" : "filter-btn"}>{item}</button>
      })}
    </div>
  );
}
