import React from "react";
import profile from "../../components/propile.jpg";
const Header = () => {
  return (
    <Header className="flex border-b-2 justify-between items-center p-4 mx-4">
      <h1 className="text-3xl text-center font-bold mt-5">My course roaster</h1>
      <img className="rounded-full w-12 h-12" src={profile}></img>
    </Header>
  );
};

export default Header;
