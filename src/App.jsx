import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./Layouts/Mainlayout";
import Home from "./pages/Home";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
