import {
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  WheelEvent,
} from "react";

export const useHorizontalScroll = () => {
  const elRef: MutableRefObject<any> = useRef();

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;

        e.preventDefault();

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behaviour: "smooth",
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
};
