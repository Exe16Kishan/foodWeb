import { Nav } from "@/components/nav";
import { Card } from "@/components/ui/card";
import { Heart, Users, Leaf, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      <div className="container mx-auto pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">About FoodShare</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're on a mission to reduce food waste and hunger by connecting food donors
            with those in need in their local communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6">
              <div className="text-[#4CAF50] mb-4">
                <Heart className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To create a world where no food goes to waste and no one goes hungry.
                We believe in the power of community and technology to make this vision
                a reality.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-[#FF9800] mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">
                We build strong local networks of donors, volunteers, and recipients
                to ensure food reaches those who need it most in every neighborhood.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-[#4CAF50] mb-4">
                <Leaf className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
              <p className="text-gray-600">
                By reducing food waste, we're not just feeding people - we're also
                helping to protect our environment and create a more sustainable future.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-[#FF9800] mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Food Safety</h3>
              <p className="text-gray-600">
                We maintain strict food safety standards and guidelines to ensure
                all donated food is safe and suitable for consumption.
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4CAF50] mb-2">10k+</div>
                <div className="text-gray-600">Meals Shared</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4CAF50] mb-2">500+</div>
                <div className="text-gray-600">Active Donors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4CAF50] mb-2">50+</div>
                <div className="text-gray-600">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4CAF50] mb-2">2k+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}