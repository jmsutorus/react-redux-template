import { useEffect, useRef } from 'react';

const clientWindow = typeof window !== 'undefined' ? window : undefined;

export default function useEventListener(
  eventName,
  handler,
  element = clientWindow,
) {
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
