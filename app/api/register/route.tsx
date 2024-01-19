import User from "@/models/user";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// type Props = {
//   name: any,
//   email: any,
//   password: any
// }

export async function POST(req: Request) {
  try {
    const { name, email, password }: any = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "user registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}