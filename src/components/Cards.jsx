const Cards = ({ title, images }) => (
  <>
    <h4>{title}</h4>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {images.map((img, index) => (
        <div className="col mb-2 text-center px-1" key={index}>
          <img className="img-fluid" src={img} alt="movie" />
        </div>
      ))}
    </div>
  </>
);

export default Cards;
