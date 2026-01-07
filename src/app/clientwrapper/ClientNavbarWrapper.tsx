"use client"; 
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../component/nav/Navbar"), { ssr: false });

export default function ClientNavbarWrapper() {
  return <Navbar />;
}
