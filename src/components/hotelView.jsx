import HotelDetails from "./HotelView-Components/hotelDetails";
import "./hotelView.scss";

function HotelView() {
  return (
    <>
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__item">
            <img
              src="./img/hotel-1.jpg"
              alt="Photo of Hotel"
              className="gallery__photo"
            />
          </figure>

          <figure className="gallery__item">
            <img
              src="./img/hotel-2.jpg"
              alt="Photo of Hotel"
              className="gallery__photo"
            />
          </figure>

          <figure className="gallery__item">
            <img
              src="./img/hotel-3.jpg"
              alt="Photo of Hotel"
              className="gallery__photo"
            />
          </figure>
        </div>

        <div className="overview">
          <h1 className="overview__heading">Hotel La Palmas</h1>
          <div className="overview__stars">
            <svg className="overview__icon-stars">
              <use xlinkHref="./img/sprite.svg#icon-star-outlined"></use>
            </svg>{" "}
            <svg className="overview__icon-stars">
              <use xlinkHref="./img/sprite.svg#icon-star-outlined"></use>
            </svg>{" "}
            <svg className="overview__icon-stars">
              <use xlinkHref="./img/sprite.svg#icon-star-outlined"></use>
            </svg>{" "}
            <svg className="overview__icon-stars">
              <use xlinkHref="./img/sprite.svg#icon-star-outlined"></use>
            </svg>{" "}
            <svg className="overview__icon-stars">
              <use xlinkHref="./img/sprite.svg#icon-star-outlined"></use>
            </svg>
          </div>

          <div className="overview__location">
            <svg className="overview__icon-location">
              <use xlinkHref="./img/sprite.svg#icon-location-pin"></use>
            </svg>
            <button className="btn-inline">Albufeira,Portugal</button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">423 views</div>
          </div>
        </div>

        <HotelDetails />
      </main>
    </>
  );
}
export default HotelView;
