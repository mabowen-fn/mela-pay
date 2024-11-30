"use client";
import Image from "next/image";
// import NavBar from "./components/appbar/appbar";
import HeaderWithMegaMenu from "./components/appbar/appbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeaderWithMegaMenu />

      <Footer />
    </div>
  );
}
