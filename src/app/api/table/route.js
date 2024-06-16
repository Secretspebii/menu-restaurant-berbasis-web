import { NextResponse } from "next/server";
const table = [
  {
    tableId: 1,
    clientId: 1,
    fullNameClient: "asep",
    status: Boolean,
  },
  {
    tableId: 2,
    clientId: 1,
    fullNameClient: "asep",
    status: Boolean,
  },
];
export async function GET() {
  return NextResponse.json({ status: 200, message: "succes", data: table });
}
