import { QRCodeCanvas } from "qrcode.react";

function QRCodeBox() {
  const eventURL = window.location.href;

  return (
    <div className="qr-box">
      <h3>Scan to access photos</h3>
      <QRCodeCanvas value={eventURL} size={170} />
      <p>Point your camera at the QR code</p>
    </div>
  );
}

export default QRCodeBox;
