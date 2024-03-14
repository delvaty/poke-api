"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Cards() {
  const list = [
    {
      title: "Orange",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 py-3 mx-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
