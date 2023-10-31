import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Nav, { Footer, Aside, Home, Pag1, Pag2 } from './reusable/Layout.tsx'

function App() {
  const [swapper, setSwapper] = useState(0);
  const swap = () => { swapper == 0 ? setSwapper(1) : setSwapper(0); }
  const user = {
    name: "Tiziano Galizzi",
    rol: [undefined, "Estudiante"],
    token: undefined
  }
  return (
    <>
      <Nav name={user.name} rol={user.rol[swapper]} />
      <div id="container">
        <div id="body_container">
          <div className="aside_container">
            <Aside rol={user.rol[swapper]} />
          </div>
          <div className="browserRouter_container">
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home rol={user.rol[swapper]} />} />
                  <Route path="pag1" element={<Pag1 />} />
                  <Route path="pag2" element={<Pag2 />} />
                </Route>

              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>


      <button type='button' onClick={swap}>Swap</button>

      <Footer />
    </>
  )
}

export default App
