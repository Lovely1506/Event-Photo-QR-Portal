function UploadPhoto({ photos, setPhotos }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPhotos([...photos, imageURL]);
    }
  };

  return (
    <div className="upload-box">
      <h3>Upload your photos</h3>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}

export default UploadPhoto;
