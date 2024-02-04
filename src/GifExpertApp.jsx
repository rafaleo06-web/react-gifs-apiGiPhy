import React, { useEffect, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const apiKey = "iuinUxbBG97deY7Qt8JP2z0aTtRL89eZ";
  const url = `https://api.giphy.com/v1/gifs/categories?api_key=${apiKey}`;
  const [categories, setCategories] = useState(["valorant"]);

  const onAddCategory = (newCategory) => {
    const toLowerNewCatgory = categories.find((category) => category.toLowerCase() === newCategory.toLowerCase());
    if (toLowerNewCatgory) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
