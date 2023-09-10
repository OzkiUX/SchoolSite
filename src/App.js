import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/notFound";
import Wiecej from "./pages/Wiecej";
import Test from "./pages/Testpage";

import praktyki_zawodowe from "./pages/dla-ucznia/praktyki_zawodowe";
import egzaminy_zawodowe from "./pages/dla-ucznia/egzaminy_zawodowe";
import branzowa_2_stopnia from "./pages/dla-ucznia/branzowa_2_stopnia";
import matura from "./pages/dla-ucznia/matura";
import menu_stołówki from "./pages/dla-ucznia/menu_stolowki";
import samorząd from "./pages/dla-ucznia/samorząd";

import konsultacje from './pages/dla-rodzica/konsultacje';
import plan_dostępności_nauczycieli from "./pages/dla-rodzica/plan_dostępności_nauczycieli";
import zebrania from "./pages/dla-rodzica/zebrania";

import MediaSzkolne from "./pages/o-szkole/media_szkolne";

// Default = /
// 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route default={<Home />} path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/więcej" element={<Wiecej />} />
        <Route path="/test" element={<Test />} />

        <Route path="/praktyki-zawodowe" element={<praktyki_zawodowe />} />
        <Route path="/branzowa-2-stopnia" element={<branzowa_2_stopnia />} />
        <Route path="/egzaminy-zawodowe" element={<egzaminy_zawodowe />} />
        <Route path="/matura" element={<matura />} />
        <Route path="/menu-stołówki" element={<menu_stołówki />} />
        <Route path="/samorząd" element={<samorząd />} />

        <Route path="/konsultacje" element={<konsultacje />} />
        <Route path="/plan-dostępności-nauczycieli" element={<plan_dostępności_nauczycieli />} />
        <Route path="/zebrania" element={<zebrania />} />
        

        <Route path="/media-szkolne" element={<MediaSzkolne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
