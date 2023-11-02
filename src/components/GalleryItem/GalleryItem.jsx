const GalleryItem = ({ movie: { backdrop_path, title } }) => {
  console.log(title);
  return (
    <div>
      <img src={backdrop_path} alt={title} />
    </div>
  );
};
export default GalleryItem;
