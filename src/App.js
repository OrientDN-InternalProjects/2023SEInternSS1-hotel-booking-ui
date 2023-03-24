import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelPage from "./pages/hotelpage/HotelPage";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels/:city/:from/:to/:type" element={<List/>}/>
        <Route path="/hotels/:from/:to/:type" element={<List/>}/>
        <Route path="/find-hotel/:city" element={<List/>}/>
        <Route path="/hotel/details/:id" element={<Hotel/>}/>
        <Route path="/all" element={<HotelPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
