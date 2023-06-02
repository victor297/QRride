import QrCode from "qrcode.react";
import { useEffect, useState } from "react";

function QrCard({
  qrRef,
  url,
  bgColor,
  qrColor,
  customImg,
  noImg,
  handleQrReset,
}) {
  let imgCustom = undefined;
  let username = sessionStorage.getItem("username");
  let park = sessionStorage.getItem("park");
  const driverdetail = [username, park];

  noImg
    ? (imgCustom = null)
    : customImg
    ? (imgCustom = customImg)
    : (imgCustom = "./logo-apple-icon192.png");

  const httpRgx = /^https?:\/\//;

  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (downloaded) {
      const msg = setTimeout(() => setDownloaded(false), 3500);
      return () => clearTimeout(msg);
    }
  }, [downloaded]);

  // const handleQrCustom = color => setQrColor(color.hex),
  // 		handleQrBgCustom = color => setQrBgColor(color.hex);

  const downloadQrCode = (e) => {
    e.preventDefault();

    const qrCanvas = qrRef.current.querySelector("canvas"),
      qrImage = qrCanvas.toDataURL("image/png"),
      qrAnchor = document.createElement("a"),
      fileName = url.replace(httpRgx, "").trim();
    qrAnchor.href = qrImage;
    qrAnchor.download = fileName + "_QrCode.png";
    document.body.appendChild(qrAnchor);
    qrAnchor.click();
    document.body.removeChild(qrAnchor);

    handleQrReset();
    setDownloaded(true);
  };

  return (
    <article className='card1'>
      <div className='qr-box' ref={qrRef} style={{ backgroundColor: bgColor }}>
        <QrCode
          size={250}
          value={username ? driverdetail : "made by vee"}
          bgColor={bgColor}
          fgColor={qrColor}
          level='H'
          includeMargin
          imageSettings={{
            src: imgCustom,
            height: 45,
            width: 45,
            excavate: true,
          }}
        />
      </div>
      <h2 className='word-wrap'>{username ? username : "QRride.com"}</h2>
      <p>Download your custom Qr Code in a few seconds just with a click.</p>

      {/* // new one */}
      <div>
        <button type='submit' onClick={downloadQrCode}>
          <span>Download now</span>
        </button>

        {downloaded && <p className='success-msg'>Qr Code downloaded.</p>}
      </div>
    </article>
  );
}

export default QrCard;
