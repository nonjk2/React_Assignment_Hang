import { useEffect, useState } from "react";

const useElementPosition = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  plusPosition: number
) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + plusPosition, left: rect.left });
    }
  }, [ref]);

  return position;
};
export default useElementPosition;
