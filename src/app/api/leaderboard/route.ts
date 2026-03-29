import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET() {
  try {
    const leaderboard = await db.leaderboard.findMany({
      orderBy: { totalPoin: "desc" },
      include: {
        user: {
          select: { nama: true, username: true },
        },
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data leaderboard" },
      { status: 500 },
    );
  }
}
