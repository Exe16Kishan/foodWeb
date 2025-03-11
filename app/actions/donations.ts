"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type DonationData = {
  foodType: string;
  quantity: string;
  expiryDate: Date;
  location: string;
  latitude: number;
  longitude: number;
  images: string[];
  notes?: string;
};

export async function createDonation(userId: string, data: DonationData) {
  try {
    const donation = await prisma.donation.create({
      data: {
        ...data,
        donorId: userId,
      },
    });
    revalidatePath("/donations");
    return { success: true, donation };
  } catch (error) {
    console.error("Failed to create donation:", error);
    return { success: false, error: "Failed to create donation" };
  }
}

export async function getDonations(params?: {
  status?: "AVAILABLE" | "RESERVED" | "COMPLETED" | "EXPIRED";
  location?: { lat: number; lng: number; radius: number };
}) {
  try {
    const where: any = {};
    
    if (params?.status) {
      where.status = params.status;
    }
    
    if (params?.location) {
      // Implement radius search using Postgres geography type
      // This is a simplified version - you might want to use PostGIS for more accurate results
      where.AND = [
        {
          latitude: {
            gte: params.location.lat - params.location.radius,
            lte: params.location.lat + params.location.radius,
          },
        },
        {
          longitude: {
            gte: params.location.lng - params.location.radius,
            lte: params.location.lng + params.location.radius,
          },
        },
      ];
    }

    const donations = await prisma.donation.findMany({
      where,
      include: {
        donor: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, donations };
  } catch (error) {
    console.error("Failed to fetch donations:", error);
    return { success: false, error: "Failed to fetch donations" };
  }
}

export async function updateDonationStatus(
  donationId: string,
  status: "AVAILABLE" | "RESERVED" | "COMPLETED" | "EXPIRED"
) {
  try {
    const donation = await prisma.donation.update({
      where: { id: donationId },
      data: { status },
    });
    revalidatePath("/donations");
    return { success: true, donation };
  } catch (error) {
    console.error("Failed to update donation status:", error);
    return { success: false, error: "Failed to update donation status" };
  }
}