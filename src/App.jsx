import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Media from "./pages/Media.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route index path="" element={<Home />} />
          <Route path="medias" element={<Media />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
