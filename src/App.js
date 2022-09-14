import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailAkun from "./pages/DetailAkun";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/DetailAkun/:id" element={<DetailAkun />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
