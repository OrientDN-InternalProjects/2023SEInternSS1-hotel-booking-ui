import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelPage from "./pages/hotelpage/HotelPage";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Reserve from "./pages/reservation/Reservation";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels/:city/:from/:to/:type" element={<List/>}/>
        <Route path="/hotels/:from/:to/:type" element={<List/>}/>
        <Route path="/find-hotel/:city" element={<List/>}/>
        <Route path="/hotel/details/:id" element={<Hotel/>}/>
        <Route path="/all" element={<HotelPage />}/>
        <Route path="/login" element={<Login />}/>

        {/* <Route element={<RequireAuth />}> */}
        <Route path="/reserve/:id" element={< Reserve />} />
        {/* </Route> */}
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
