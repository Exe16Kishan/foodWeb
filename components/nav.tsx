"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Menu, User } from 'lucide-react';

export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-[#4CAF50]" />
            <span className="font-bold text-xl">FoodShare</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/map" className="text-gray-600 hover:text-gray-900">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Find Food</span>
              </div>
            </Link>
            <Link href="/donate" className="text-gray-600 hover:text-gray-900">Donate</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Button variant="default" className="bg-[#4CAF50] hover:bg-[#45a049]">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
          
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}