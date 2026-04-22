"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    // Delay initialization to ensure DOM is ready
    const initScroll = () => {
      if (scrollRef.current && !scrollInstance.current) {
        scrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: " locomotive-scroll",
          tablet: true,
          smartphone: true,
        });
      }
    };

    // Small delay to let React render
    const timer = setTimeout(initScroll, 100);

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}