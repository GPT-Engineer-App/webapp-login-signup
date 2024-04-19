import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  const toggleSidebar = () => {
    console.log("Sidebar toggled");
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index onToggleSidebar={toggleSidebar} />} />
      </Routes>
    </Router>
  );
}

export default App;
