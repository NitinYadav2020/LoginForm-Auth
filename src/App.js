import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from './components/Home';
import { AuthProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { AddNewProd } from "./components/AddNewProd";
import { UpdateProductList } from "./components/UpdateProductList";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/addNewProd' element={<AddNewProd />} />
          <Route path='/UpdateProductList' element={<UpdateProductList/>}/>
        </Route>  
      </Routes>
    </AuthProvider>
  );
}

export default App;
