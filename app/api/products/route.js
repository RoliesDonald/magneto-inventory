import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const productData = await request.json();
    // const newProduct = { title, slug, imageUrl, description };
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create new Product",
        error,
      },
      { status: 500 }
    );
  }
}
