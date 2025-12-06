import { NextResponse } from "next/server";

const dummyUsers: Record<string, { id: number; name: string; age: number }> = {
  "1": { id: 1, name: "John Doe", age: 28 },
  "2": { id: 2, name: "Jane Smith", age: 32 },
  "3": { id: 3, name: "Alex Johnson", age: 40 },
};

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const user = dummyUsers[id];

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}
