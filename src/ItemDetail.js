import React, {useState, useEffect} from "react";

function ItemDetail() {

useEffect(() => {
  fetchItem();
}, []); 

const [item, setItem] = useState({});

const fetchItem = async() => {
  const fetchItem = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`);

  const item = await fetchItem.json();
  setItem(item.drinks[0])
  console.log('lala', item.drinks);
};

  return (
    <div>
      <h1>{item.strInstructions}</h1>
    </div>
  );
}

export default ItemDetail;
