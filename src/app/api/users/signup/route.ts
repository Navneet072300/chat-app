import bcryptjs from "bcryptjs";
import { connect } from "@/db/config";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();

    const { fullName, email, phoneNumber, password } = await request.json();

    if (!fullName || !email || !phoneNumber || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", user: savedUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
