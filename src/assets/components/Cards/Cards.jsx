import React, { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="w-4/5">
      <h2 className="text-2xl ">Course List:{cards.length}</h2>
    </div>
  );
};

export default Cards;
