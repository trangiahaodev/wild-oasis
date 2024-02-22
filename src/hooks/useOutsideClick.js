import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      // We need 'true' as a third argument cause event works in a bubbling way
      // It means even though the event was unmounted, it still goes the way up in the DOM tree (event bubbling)
      // So we need to addEventListener in the capturing phase NOT in the bubbling one.
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
