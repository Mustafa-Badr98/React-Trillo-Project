import "./hotelDetails.scss";

function HotelDetails() {
  return (
    <>
      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free Wifi in all rooms</li>
            <li className="list__item">Air condition and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for Families</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 others recommend this hotel
            </p>
            <div className="recommend__friends">
              <img
                src="./img/user-3.jpg"
                alt="Friend"
                className="recommend__photo"
              />
              <img
                src="./img/user-4.jpg"
                alt="Friend"
                className="recommend__photo"
              />
              <img
                src="./img/user-5.jpg"
                alt="Friend"
                className="recommend__photo"
              />
              <img
                src="./img/user-6.jpg"
                alt="Friend"
                className="recommend__photo"
              />
            </div>
          </div>
        </div>

        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              ipit? Illum ipit? Illum ipit? Illum ipit? Illum ipit? Illum ipit?
            </blockquote>
            <figcaption className="review__user">
              <img src="img/user-1.jpg" alt="User1" className="review__photo" />
              <div className="review__user-box">
                <p className="review__user-name">Nike Smith</p>
                <p className="review__user-date">Feb 23rd, 2017</p>
              </div>
              <div className="review__rating">7.8</div>
            </figcaption>
          </figure>

          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              prehenderit suscipit?
            </blockquote>
            <figcaption className="review__user">
              <img src="img/user-2.jpg" alt="User1" className="review__photo" />
              <div className="review__user-box">
                <p className="review__user-name">Mary Tomas</p>
                <p className="review__user-date">Sep 13th, 2017</p>
              </div>
              <div className="review__rating">9.3</div>
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show All <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good new! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn">
          <span className="btn__visible">Book now</span>
          <span className="btn__invisible">Only 4 rooms left</span>
        </button>
      </div>
    </>
  );
}

export default HotelDetails;
