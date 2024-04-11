import { useEffect } from "react";

const getEverVisited = () => localStorage.getItem("everVisited") === null;

export default function () {
  let animate = "";

  useEffect(() => {
    if (getEverVisited()) {
      localStorage.setItem("everVisited", true);
    }
  }, []);

  if (getEverVisited()) {
    animate = "fade delay";
  }

  return { animate };
}
