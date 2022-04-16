import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Home/Services/Services";
import NotFound from "./Pages/Shared/NotFound";
import Signup from "./Pages/Login/Signup";
import ProductDetails from "./Pages/Shared/ProductDetails";
import Cheekout from "./Pages/Shared/Cheekout";
import RequireAuth from "./RequiredAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/services/:serviceId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/cheekout"
          element={
            <RequireAuth>
              <Cheekout></Cheekout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
