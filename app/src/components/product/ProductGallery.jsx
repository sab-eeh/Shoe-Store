import { useState } from "react";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <img
        src={active}
        alt="Product"
        className="w-full h-80 object-cover rounded-2xl border border-border"
      />

      <div className="flex gap-3 mt-4">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActive(img)}
            className={`h-16 w-16 rounded-xl border ${
              active === img ? "border-primary" : "border-border"
            } overflow-hidden`}
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
