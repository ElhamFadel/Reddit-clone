import React from "react";
import { Button as BtnWrapper } from "./style";

function Button({ className, children, to, primary }) {
  return (
    <BtnWrapper to={to} className={className} type={primary}>
      {children}
    </BtnWrapper>
  );
}

export default Button;
