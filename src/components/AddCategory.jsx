import React, { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return; //si se cumple, se sale de la funcion y NO se ejecuta lo demás

    //categories: son todas del estado
    // setCategories((categories) => [inputValue, ...categories]);

    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </form>
  );
};
