import React from "react";

interface CardProps {
  title: string;
  description: React.ReactNode;
  image: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, image, link, description }) => (
  <a href={link} style={{ textDecoration: "none" }} className="flex-1">
    <div className="bg-gray-100 rounded-lg shadow-lg hover:shadow-xl">
      <img src={image} alt={title} className="w-full max-h-80" />
      <div className="p-4">
        <h2 className="mt-4 text-2xl font-bold text-center">{title}</h2>
        <p className="mt-2 text-justify">{description}</p>
      </div>
    </div>
  </a>
);
export default Card;
