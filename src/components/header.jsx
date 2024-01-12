import "./header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <img src="./img/logo.png" alt="Trillo Logo" className="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search Hotel"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref="./img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="./img/sprite.svg#icon-bookmarks"></use>
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref="./img/sprite.svg#icon-chat"></use>
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img
              src="./img/user.jpeg"
              alt="User photo"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Mustafa</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
