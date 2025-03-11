"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createReservation(userId: string, donationId: string) {
  try {
    // Start a transaction to ensure data consistency
    const reservation = await prisma.$transaction(async (tx) => {
      // Check if donation is available
      const donation = await tx.donation.findUnique({
        where: { id: donationId },
      });

      if (!donation || donation.status !== "AVAILABLE") {
        throw new Error("Donation is not available");
      }

      // Create reservation and update donation status
      const reservation = await tx.reservation.create({
        data: {
          userId,
          donationId,
          status: "PENDING",
        },
      });

      await tx.donation.update({
        where: { id: donationId },
        data: { status: "RESERVED" },
      });

      return reservation;
    });

    revalidatePath("/reservations");
    return { success: true, reservation };
  } catch (error) {
    console.error("Failed to create reservation:", error);
    return { success: false, error: "Failed to create reservation" };
  }
}

export async function updateReservationStatus(
  reservationId: string,
  status: "CONFIRMED" | "COMPLETED" | "CANCELLED"
) {
  try {
    const reservation = await prisma.$transaction(async (tx) => {
      const updated = await tx.reservation.update({
        where: { id: reservationId },
        data: { status },
      });

      // Update donation status based on reservation status
      const donationStatus = status === "CANCELLED" ? "AVAILABLE" 
        : status === "COMPLETED" ? "COMPLETED" 
        : "RESERVED";

      await tx.donation.update({
        where: { id: updated.donationId },
        data: { status: donationStatus },
      });

      return updated;
    });

    revalidatePath("/reservations");
    return { success: true, reservation };
  } catch (error) {
    console.error("Failed to update reservation status:", error);
    return { success: false, error: "Failed to update reservation status" };
  }
}

export async function getUserReservations(userId: string) {
  try {
    const reservations = await prisma.reservation.findMany({
      where: { userId },
      include: {
        donation: {
          include: {
            donor: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, reservations };
  } catch (error) {
    console.error("Failed to fetch user reservations:", error);
    return { success: false, error: "Failed to fetch user reservations" };
  }
}