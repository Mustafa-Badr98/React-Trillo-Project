import Header from "./components/header";
import HotelView from "./components/hotelView";
import SideBar from "./components/sideNavbar";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <SideBar />
          <HotelView />
        </div>
      </div>
    </>
  );
}

export default App;
