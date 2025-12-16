import { analyticsPayloadSchema } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const beaconText = await request.text();
    const data = JSON.parse(beaconText);
    const outcome = analyticsPayloadSchema.safeParse(data);
    if (!outcome.success) {
      return NextResponse.json(
        {
          status: "failed",
          message: outcome.error.message,
        },
        { status: 400 }
      );
    }

    const payload = outcome.data;

    const tbBaseUrl = process.env.TINYBIRD_API_BASE_URL;
    const tbDatasource = process.env.DATASOURCE_NAME;
    const tbDatasourceToken = process.env.TINYBIRD_APPEND_TOKEN_BELVEDERE;

    if (!tbBaseUrl || !tbDatasource || !tbDatasourceToken) {
      console.error("Missing Tinybird configuration environment variables.");
      return NextResponse.json(
        {
          status: "failed",
          message: "Server configuration error: Missing Analytics Credentials",
        },
        { status: 500 }
      );
    }

    const ingestionUrl = `${tbBaseUrl}?name=${tbDatasource}&token=${tbDatasourceToken}`;

    const tinybirdResponse = await fetch(ingestionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!tinybirdResponse.ok) {
      const errorText = await tinybirdResponse.text();
      console.error(
        "TINYBIRD INGESTION FAILED:",
        tinybirdResponse.status,
        errorText
      );
      return NextResponse.json(
        {
          status: "failed",
          message: `Tinybird rejected data with status ${tinybirdResponse.status}`,
          details: errorText,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Analytics API Error:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "failed", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { status: "failed", message: "Unknown error" },
      { status: 500 }
    );
  }
}
