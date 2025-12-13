import { analyticsPayloadSchema } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const outcome = analyticsPayloadSchema.safeParse(request.body);
  if (!outcome.success)
    return NextResponse.json(
      {
        status: "failed",
        message: outcome.error.message,
      },
      { status: 400 }
    );

  const payload = outcome.data;

  const tbBaseUrl = process.env.TINYBIRD_API_BASE_URL;
  const tbDatasource = process.env.DATASOURCE_NAME;
  const tbDatasourceToken = process.env.TINYBIRD_APPEND_TOKEN_BELVEDERE;
  const ingestionUrl = `${tbBaseUrl}?name=${tbDatasource}&token=${tbDatasourceToken}`;

  try {
    const tinybirdResponse = await fetch(ingestionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!tinybirdResponse.ok) {
      return NextResponse.json(
        { status: "failed", message: "Server Error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "created" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "success", message: error.message },
        { status: 201 }
      );
    }
  }
}
