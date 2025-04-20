import React, { ReactNode } from "react";
import styled from "../styles/ProductCard.module.css";
import Image from "next/image";

export interface IImage {
  id: number;
  name: string;
  description: string;
  price: number;
  src: string;
  // alt: string;
}

const ProductCard = ({
  id,
  name,
  src,
  // alt,
  description,
  price,
}: IImage): ReactNode => {
  return (
    <div className={styled.box}>
      <div>
        <img
          src={src}
          // alt={alt}
          alt={"alt"}
          className={styled.image}
          width={250}
          height={100}
        />
        <h2 className={styled.heading}>{name}</h2>
        <h3 className={styled.price}>${price}</h3>
        <p className={styled.textBox}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
