import { useState } from "react";
import { HeaderCart } from "./HeaderCart";
import { Basket } from "@/components/Basket/Basket";

const HeaderCartWithData = () => {
  const [open, setIsOpen] = useState(false);
  const onBasketClick = () => {
    window.location.href = `/checkout`;
  }
  return (
    <div style={{ display: "inline-block", marginLeft: 'auto' }}>
      <HeaderCart
        onClick={() => onBasketClick()}
        onMouseOut={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
      />
      {open && (
        <Basket
          onMouseOut={() => setIsOpen(false)}
          onMouseOver={() => setIsOpen(true)}
        />
      )}
    </div>
  );
};

export { HeaderCartWithData };
