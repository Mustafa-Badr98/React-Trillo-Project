import "./sideNavbar.scss";

function SideBar() {
  return (
    <>
      <nav className="sidebar">
        <ul className="side-nav">
          <li  className="side-nav__item side-nav__item--active">
            <a href="#" className="side-nav__link" >
              <svg className="side-nav__icon">
                <use xlinkHref="./img/sprite.svg#icon-home"></use>
              </svg>
              <span>Hotel</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="./img/sprite.svg#icon-aircraft-take-off"></use>
              </svg>
              <span>Flight</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="./img/sprite.svg#icon-key"></use>
              </svg>
              <span>Car rental</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref="./img/sprite.svg#icon-map"></use>
              </svg>
              <span>Tours</span>
            </a>
          </li>
        </ul>
        <div className="legal">&copy; 2024. </div>
      </nav>
    </>
  );
}
export default SideBar;
