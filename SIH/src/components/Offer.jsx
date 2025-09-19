import React, { useEffect } from "react";
import "./Offer.css"

function Offer() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white space-y-10">
      <h1 className="text-3xl font-bold text-center">Infinite Scroll Animation</h1>

      <div className="scroller" data-speed="fast" data-direction="left">
        <div className="scroller__inner flex gap-4 py-4">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
