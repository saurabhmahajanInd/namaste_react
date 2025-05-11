import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ErrorAppLayout from "./components/ErrorAppLayout";
import ErrorAbout from "./components/ErrorAbout";
import About from "./components/About";
//import Contact from "./components/contact";
import AboutBasic from "./components/AboutBasic";
import AboutAdvance from "./components/AboutAdvance";
import RestroContainer from "./components/RestroContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestroDetails from "./components/RestroDetails";
import { UserDataContext } from "./utils/UserDataContext";

import { lazy, Suspense, useEffect } from "react";

import { UserDataContext } from "./utils/UserDataContext";

const Contact = lazy(() => import("./components/contact"));

const AppLayout = () => {
  const [userName, setUserName] = useState("I am from State");
  useEffect(() => {
    const data = {
      loggedInUser: "New Name from API",
    };
    setUserName(data.loggedInUser);
  }, []);
  return (
    <div id="app-layout">
      <UserDataContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserDataContext.Provider>
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorAppLayout />,
    children: [
      {
        path: "/",
        element: <Body></Body>,
        children: [
          {
            path: "/restro",
            element: <RestroContainer />,
          },
          {
            path: "/restro/:restroId",
            element: <RestroDetails />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
        children: [
          { path: "/about/basic", element: <AboutBasic /> },
          { path: "/about/advance", element: <AboutAdvance /> },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={routes} />);
