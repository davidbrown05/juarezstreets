import React, { Suspense, lazy, useState } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Rings } from "react-loader-spinner";
import { NavBar } from "./components/NavBar";

const Restaurantes = lazy(() => import("./pages/Restaurantes"));



function App() {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <>
      <NavBar showMenu={showMenu} />
      <Suspense
        fallback={
          <div className=" flex flex-col gap-2 mx-auto items-center w-[80px] h-[80px]">
            {/* <h1 className=" font-semibold"> loading...</h1> */}
            <Rings
              visible={true}
              height="100%"
              width="100%"
              color="#e43434"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="restaurantes" element={<Restaurantes></Restaurantes>}></Route>
          
        

          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
