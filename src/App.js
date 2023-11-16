import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ClubPage from "./pages/ClubPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/club/:id" element={<ClubPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
