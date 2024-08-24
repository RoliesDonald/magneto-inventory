import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, voucherCode, imageUrl, vaoucherExpired, description } =
      await request.json();
    const newVoucher = {
      title,
      voucherCode,
      imageUrl,
      vaoucherExpired,
      description,
    };
    console.log(newVoucher);
    return NextResponse.json(newVoucher);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create new Voucher",
        error,
      },
      { status: 500 }
    );
  }
}
