import React, { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop({children}: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return <>{children}</>;
}