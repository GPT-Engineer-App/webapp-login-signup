import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AfterLogin from "./pages/AfterLogin.jsx";

function App() {
  const toggleSidebar = () => {
    console.log("Sidebar toggled");
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index onToggleSidebar={toggleSidebar} />} />
        <Route path="/after-login" element={<AfterLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
