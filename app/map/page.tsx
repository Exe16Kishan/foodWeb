import { Card } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { MapPin, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      <div className="container mx-auto pt-24 px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search and Filters */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search locations..."
                  className="pl-10"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 block mb-2">Distance</label>
                    <select className="w-full rounded-md border border-gray-200 p-2">
                      <option>Within 5 km</option>
                      <option>Within 10 km</option>
                      <option>Within 20 km</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 block mb-2">Food Type</label>
                    <select className="w-full rounded-md border border-gray-200 p-2">
                      <option>All Types</option>
                      <option>Vegetarian</option>
                      <option>Non-Vegetarian</option>
                      <option>Vegan</option>
                    </select>
                  </div>
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Map View */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="bg-gray-200 h-[600px] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Map integration will be added here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}