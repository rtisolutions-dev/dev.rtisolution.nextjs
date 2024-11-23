import React from "react";
import { Container } from "@/components/Container";

export const Card = ({ item }: any) => {
  return (
    <div className="flex items-center justify-center h-max text-white bg-green-500 px-2 py-2 lg:px-2 lg:py-2 rounded-xl">
      <div className="text-center">
        <h2 className="text-2xl font-medium lg:text-3xl">{item?.percent}</h2>
        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          {item?.name}
        </p>
      </div>
    </div>
  );
};
