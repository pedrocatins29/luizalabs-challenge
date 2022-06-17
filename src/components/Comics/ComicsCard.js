import React from "react";

function ComicsCard({ title, image }) {
  const imagePath = `${image.path}/portrait_xlarge.${image.extension}`;
  return (
    <li className="d-flex">
      <img src={imagePath} alt="Capa do quadrinho" />
      <p className="bold-text">{title}</p>
    </li>
  );
}

export default ComicsCard;
