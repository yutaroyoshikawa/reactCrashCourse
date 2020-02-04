import { useEffect, useRef, useState, MutableRefObject } from "react";

export const useHome = (): { state: string, pRef: MutableRefObject<HTMLParagraphElement> } => {
  const [hoge, updateHoge] = useState<string>("");

  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    console.log("mounted!");
    updateHoge("hoge");
    pRef.current.innerHTML = "huga";

    return () => {
      console.log("destoloyed!");
    }
  }, [hoge]);

  return {
    state: hoge,
    pRef
  }
};
