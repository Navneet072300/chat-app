import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const response = new NextResponse(
      JSON.stringify({ message: "Logout successful" }),
      { status: 200 }
    );

    response.cookies.set("authToken", "", {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
