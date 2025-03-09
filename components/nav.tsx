"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Menu, User, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-[#4CAF50]" />
            <span className="font-bold text-xl">FoodShare</span>
          </Link>

          {/* Desktop menu - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/map" className="text-gray-600 hover:text-gray-900">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Find Food</span>
              </div>
            </Link>
            <Link href="/donate" className="text-gray-600 hover:text-gray-900">
              Donate
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Button
              variant="default"
              className="bg-[#4CAF50] hover:bg-[#45a049]"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Slideover menu for mobile */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-6 bg-white">
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-xl">Menu</span>
            <Button variant="ghost" onClick={toggleMenu} className="p-1">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/map"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Find Food</span>
              </div>
            </Link>
            <Link
              href="/donate"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              Donate
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Button
              variant="default"
              className="bg-[#4CAF50] hover:bg-[#45a049] mt-2 w-full"
              onClick={toggleMenu}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 md:hidden z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
