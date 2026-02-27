"use client";

import PrivateRoute from "./components/organisms/guards/PrivateRoute";
import HomeTemplate from "./components/templates/home/HomeTemplate";
import "./home.css";

export default function Home() {
  return (
    <PrivateRoute>
      <HomeTemplate/>
    </PrivateRoute>
  );
}
