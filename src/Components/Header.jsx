import React from "react";

const Header = ({ name, surname, age, location, school }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h3>{age}</h3>
      <h3>{location}</h3>
      <h3>{school}</h3>
    </>
  );
};

export default Header;
