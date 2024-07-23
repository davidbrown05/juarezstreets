import React, { useState, useEffect, Suspense } from "react";
import {
  RiHome8Fill,
  RiContactsBook2Fill,
  RiLoginBoxLine,
  RiInstagramFill,
} from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaUber } from "react-icons/fa";

import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMenuBook, MdOutlineDeliveryDining } from "react-icons/md";
import { NavLink, useLocation, Outlet } from "react-router-dom";
//import { Rings } from "react-loader-spinner";

const facebookLink = "https://www.facebook.com/eltacosteaksendero";
const instaLink = "https://www.instagram.com/el_taco_steak_oficial/";
const uberEats =
  "https://www.ubereats.com/mx/store/el-taco-steak/POV7FbqWTv2rmSR9zFSn8w?diningMode=DELIVERY&sc=SEARCH_SUGGESTION";
const rappi = "https://www.rappi.com.mx/restaurantes/1923238071-el-taco-steak";
const didi =
  "https://www.didi-food.com/es-MX/food/store/5764607736000807173/El-Taco-Steak-(Gomez-Mor%C3%ADn)?pl=eyJwb2lJZCI6IkVqZERZV3hzWlNCRFlXMXBibThnWVNCRmMyTjFaR1Z5Ynl3Z1EybDFaR0ZrSUVwMXc2RnlaWG9zSUVOb2FXZ3VMQ0JOdzZsNGFXTnZJaTRxTEFvVUNoSUotMmlnc19CYzU0WVI3X3BGam9yVk9OSVNGQW9TQ1oweUN6M0xYdWVHRVhSNW5GUUFZUmtMIiwiZGlzcGxheU5hbWUiOiJDYWxsZSBDYW1pbm8gYSBFc2N1ZGVybyIsImFkZHJlc3MiOiJDLiBDYW1pbm8gYSBFc2N1ZGVybywgQ2QgSnXDoXJleiwgQ2hpaC4sIE1leGljbyIsImxhdCI6MzEuNzAyMDM1OSwibG5nIjotMTA2LjM4Nzg0ODYsInNyY1RhZyI6Imdvb2dsZV9hdXRvY29tcGxldGVfZ2cjZ29vZ2xlX2dlb2NvZGUiLCJwb2lTcmNUYWciOiJtYW51YWxfc3VnIiwiY29vcmRpbmF0ZVR5cGUiOiJ3Z3M4NCIsImNpdHlJZCI6NTIwODA4MDAsImNpdHkiOiJKdcOhcmV6KENISUgpIiwic2VhcmNoSWQiOiIwYTBmMTIzMTY0N2Y2MzhkMmUxZGUxYzAyMjc1YzcwMiIsImFkZHJlc3NBbGwiOiJDLiBDYW1pbm8gYSBFc2N1ZGVybywgQ2QgSnXDoXJleiwgQ2hpaC4sIE1leGljbyIsImFkZHJlc3NBbGxEaXNwbGF5IjoiQy4gQ2FtaW5vIGEgRXNjdWRlcm8sIENkIEp1w6FyZXosIENoaWguLCBNZXhpY28iLCJjb3VudHJ5Q29kZSI6Ik1YIiwiY291bnRyeUlkIjo1MiwiZGlzdFN0ciI6Ijk5K2ttIiwicG9pVHlwZSI6InJvdXRlO2dlb2NvZGUiLCJjb3VudHlJZCI6NTIwODA4MDEsImNvdW50eUdyb3VwSWQiOjUyMDgwODAwMDAwMSwiYWlkIjoiIn0%3D";

const whats = `https://api.whatsapp.com/send?phone=526563607662`;


const sidebarOptions = [
  { icon: <RiHome8Fill className="text-2xl" />, label: "Inicio", to: "/" },
  {
    icon: <MdOutlineMenuBook className="text-2xl" />,
    label: "RESTAURANTES",
    to: "/restaurantes",
  },
  {
    icon: <RiContactsBook2Fill className="text-2xl" />,
    label: "Contacto",
    to: "/about",
  },
  {
    icon: <RiInstagramFill className="text-2xl" />,
    label: "Instagram",
    link: instaLink,
  },
  {
    icon: <FaSquareFacebook className="text-2xl" />,
    label: "Facebook",
    link: facebookLink,
  },
 
 
];



export const SideBar = ({showSidebar,handleSideBarToggle}) => {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
  return (
    <div>
      <div
        className={`fixed bg-black  top-0 w-[300px] xl:w-[300px] h-full flex flex-col items-center   py-6 z-50 transition-all ${
          showSidebar ? "left-0" : "-left-full"
        } overflow-y-auto`}
      >
        <img
          src="logo.jpg"
          alt="Logo"
          className="w-[80px] h-[80px] md:w-14 md:h-14 rounded-full border border-white shadow-lg mobile-portrait:w-[40px] mobile-portrait:h-[40px] mt-10"
        />
        <nav className="overflow-y-auto flex flex-col items-center">
          <ul className="pl-4 ">
            {sidebarOptions.map((option, index) => (
              <li
                onClick={() => handleSideBarToggle()}
                key={index}
                className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
              >
                {option.to ? (
                  <NavLink
                    to={option.to}
                    isActive={() => {
                      return location.pathname === option.to;
                    }}
                    className={`${
                      location.pathname === option.to ? "bg-red-600" : ""
                    } group-hover:bg-red-600 p-2 flex gap-4 items-center rounded-xl text-white group-hover:text-white transition-colors`}
                  >
                    {option.icon}
                    {option.label}
                  </NavLink>
                ) : (
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      location.pathname === option.to ? "bg-red-600" : ""
                    } group-hover:bg-red-600 p-2 flex gap-4 items-center rounded-xl text-white group-hover:text-white transition-colors`}
                  >
                    {option.icon}
                    {option.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          {isReadyForInstall && (
            <button onClick={downloadApp} className=" text-white">
              Descargar app
            </button>
          )}
        </nav>
      </div>
      {/* overlay */}
      {showSidebar ? (
        <div
          onClick={() => handleSideBarToggle()}
          className="bg-black/80 fixed w-full h-screen z-30 top-0 left-0 "
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
