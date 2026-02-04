import { useState } from "react";

function EventPage() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...imageUrls]);
  };

  return (
    <div className="container">
      <h1>Event Photo QR Portal</h1>

      <div className="card">
        <h3>Event Photos</h3>

        <input type="file" multiple onChange={handleUpload} />

        <div className="gallery">
          {images.map((img, index) => (
            <div className="image-card" key={index}>
              <img src={img} alt="uploaded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
