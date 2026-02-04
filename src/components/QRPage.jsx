import UploadPhoto from "./UploadPhoto";
import Gallery from "./Gallery";
import QRCodeBox from "./QRCodeBox";
import { useState } from "react";

function QRPage() {
  const [photos, setPhotos] = useState([]);
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="container">
      <h1>Event Photo Portal</h1>

      <button onClick={toggleDarkMode} style={toggleStyle}>
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="card">
        <QRCodeBox />
      </div>

      <div className="card">
        <UploadPhoto photos={photos} setPhotos={setPhotos} />
      </div>

      <div className="card">
        <Gallery photos={photos} />
      </div>

      <p className="footer-text">Scan the QR • Upload • Relive the moments</p>
    </div>
  );
}

const toggleStyle = {
  margin: "0 auto 20px",
  display: "block",
  padding: "8px 16px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
};

export default QRPage;
