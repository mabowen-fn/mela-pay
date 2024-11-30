"use client";
import Image from "next/image";
// import NavBar from "./components/appbar/appbar";
import HeaderWithMegaMenu from "./components/appbar/appbar";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HeaderWithMegaMenu />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>
          <div className="w-full bg-red-200"></div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
