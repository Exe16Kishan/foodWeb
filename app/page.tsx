import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Food, <span className="text-[#4CAF50]">Save Lives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with your community, reduce food waste, and help those in need.
            Every meal shared is a life touched.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
              Start Donating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Find Food Near You
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="mb-4 text-[#4CAF50]">
                <MapPin className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">List Your Donation</h3>
              <p className="text-gray-600">
                Share details about your food donation, including type, quantity,
                and pickup location.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 text-[#FFEB3B]">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Recipients in your area will be notified and can quickly respond to
                collect the food.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 text-[#FF9800]">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make a Difference</h3>
              <p className="text-gray-600">
                Your donation helps reduce food waste and supports those in need in
                your community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
                  alt="Community food sharing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Local Restaurant Impact</h3>
                <p className="text-gray-600">
                  "We've donated over 1,000 meals to families in need through
                  FoodShare. It's incredible to see our excess food going to good use."
                </p>
                <p className="mt-4 text-sm text-gray-500">- bunty's Café</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3"
                  alt="Food donation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Community Hero</h3>
                <p className="text-gray-600">
                  "FoodShare has made it easy to connect with people who need food.
                  I'm proud to have helped feed over 50 families in my neighborhood."
                </p>
                <p className="mt-4 text-sm text-gray-500">- Aman, Regular Donor</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#4CAF50] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of food heroes today and help us create a world
            where no food goes to waste.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <Link href="/signup">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}