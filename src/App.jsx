// importiamo tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";

// import del layout di ref
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/chisiamo" element={<AboutUs />} />
            <Route path="/prodotti" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
