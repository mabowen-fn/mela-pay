import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-8">
          <div className="self-center">
            <img src={"/logo_nav.svg"} alt="Logo" className="h-12" />
          </div>
          <div className="hidden md:block">
            <img src={"/logo_nav.svg"} alt="QR Code" className="h-24" />
          </div>
        </div>
        <div className="md:flex md:justify-start mb-4">
          <div className="mr-16">
            <h6 className="uppercase font-bold mb-4">About</h6>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Code of Conduct
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Who we are
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-16">
            <h6 className="uppercase font-bold mb-4">Resources</h6>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Career
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-16">
            <h6 className="uppercase font-bold mb-4">Legal</h6>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-16">
            <h6 className="uppercase font-bold mb-4">More</h6>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Mela AI
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Design System
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Research
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Tools
                </a>
              </li>
            </ul>
          </div>
          <div className="block md:hidden mb-4">
            <img src={"/logo_nav.svg"} alt="QR Code" className="h-24 mx-auto" />
          </div>
        </div>
        <div className="text-start ">© MelaPay. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
