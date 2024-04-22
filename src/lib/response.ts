import { NextResponse } from "next/server"

export default function response(status: number, message: string, data?: unknown) {
  return NextResponse.json({
    message,
    data,
    status
  }, { status })
}