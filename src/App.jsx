import Homepage from "./Homepage.jsx";
import Dictionary from "./Dictionary.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Nav from "./Nav.jsx";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import ProtectedRoute from "./ProtectedRoute.jsx";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

export default function App() {
    return (
        <>
        <Nav/>
      
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Homepage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter> 
        </>
    );
}
