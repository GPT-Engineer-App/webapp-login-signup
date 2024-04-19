import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AfterLogin from "./pages/AfterLogin.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const toggleSidebar = () => {
    console.log("Sidebar toggled");
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index onToggleSidebar={toggleSidebar} />} />
        <Route path="/after-login" element={<AfterLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
