import Image from "next/image";
import { useState } from "react";

const ImageComponent = ({ src, alt, width, height ,className}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc("/next.svg"); 
  };

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ImageComponent;
