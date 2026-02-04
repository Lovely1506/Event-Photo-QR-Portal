function Gallery({ photos }) {
  return (
    <div>
      <h3>Event Photos</h3>
      <div className="gallery">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="event" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
