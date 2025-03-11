"use server"

import { prisma } from "@/lib/prisma";

export async function getUserProfile(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        donations: {
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        },
        reservations: {
          include: {
            donation: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        },
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return { success: true, user };
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    return { success: false, error: "Failed to fetch user profile" };
  }
}

export async function updateUserProfile(
  userId: string,
  data: {
    name?: string;
    image?: string;
  }
) {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });

    return { success: true, user };
  } catch (error) {
    console.error("Failed to update user profile:", error);
    return { success: false, error: "Failed to update user profile" };
  }
}

export async function getDonorStats(userId: string) {
  try {
    const stats = await prisma.donation.groupBy({
      by: ["status"],
      where: {
        donorId: userId,
      },
      _count: true,
    });

    const totalDonations = await prisma.donation.count({
      where: { donorId: userId },
    });

    const completedDonations = await prisma.donation.count({
      where: {
        donorId: userId,
        status: "COMPLETED",
      },
    });

    return {
      success: true,
      stats: {
        total: totalDonations,
        completed: completedDonations,
        byStatus: stats,
      },
    };
  } catch (error) {
    console.error("Failed to fetch donor stats:", error);
    return { success: false, error: "Failed to fetch donor stats" };
  }
}