import { useState } from "react";

const IMAGE_BASE_URL = "http://localhost:5000";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      {/* MAIN IMAGE */}
      <img
        src={`${IMAGE_BASE_URL}${active}`}
        alt="Product"
        className="w-full h-80 object-contain rounded-2xl border border-border bg-white"
      />

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActive(img)}
            className={`h-16 w-16 rounded-xl border transition ${
              active === img
                ? "border-primary ring-2 ring-primary/30"
                : "border-border hover:border-primary/50"
            } overflow-hidden`}
          >
            <img
              src={`${IMAGE_BASE_URL}${img}`}
              alt=""
              className="h-full w-full object-contain bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
