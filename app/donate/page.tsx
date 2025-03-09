import { Nav } from "@/components/nav";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Image as ImageIcon, Clock } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      <div className="container mx-auto pt-24 px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Share Your Food</h1>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Type
                </label>
                <Input placeholder="e.g., Cooked meals, Fresh produce" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <Input placeholder="e.g., 5 meals, 2kg rice" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="expiry">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Expiry Date & Time
                  </div>
                </label>
                <Input type="datetime-local" id="expiry" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Pickup Location
                  </div>
                </label>
                <Input placeholder="Enter address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Upload Images
                  </div>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#4CAF50] hover:text-[#45a049]">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  className="w-full rounded-md border border-gray-200 p-2"
                  rows={4}
                  placeholder="Any special instructions for pickup or handling..."
                ></textarea>
              </div>

              <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                Submit Donation
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}