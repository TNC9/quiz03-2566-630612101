import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Thananchai Chaimanee",
    studentId: "630612101",
  });
};
