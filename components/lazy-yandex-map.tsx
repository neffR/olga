"use client";

import { useEffect, useState } from "react";

type LazyYandexMapProps = {
  src: string;
  title: string;
};

export function LazyYandexMap({ src, title }: LazyYandexMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 860) {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return (
      <button className="map-load-btn" type="button" onClick={() => setIsLoaded(true)}>
        Открыть карту
      </button>
    );
  }

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      loading="lazy"
      title={title}
    />
  );
}
