// src/components/SocialIcon.js
import React from "react";

const SocialIcon = ({
  size = 15,
  color = "transparent",
  bgColor = "transparent",
  height = 30,
  width = 30,
  Icon,
}: any) => {
  return (
    <div
      className={`flex items-center justify-center rounded-md overflow-hidden`}
      style={{
        backgroundColor: bgColor,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {Icon ? React.cloneElement(Icon, { size, color }) : null}{" "}
    </div>
  );
};

export default SocialIcon;
