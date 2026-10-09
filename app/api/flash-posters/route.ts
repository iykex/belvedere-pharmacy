import { getAdminDb } from "@/lib/firebase/firebase-admin";
import { getTenantSlug } from "@/lib/config/tenant";

export async function GET() {
  try {
    const db = getAdminDb();
    if (!db) return Response.json({ posters: [] });
    const tenant = getTenantSlug();
    const now = Date.now();
    const snapshot = await db.collection("flash_posters").orderBy("priority", "asc").get();
    const posters = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter((poster) => {
      const data = poster as Record<string, unknown>;
      const starts = typeof data.startsAt === "string" ? Date.parse(data.startsAt) : -Infinity;
      const ends = typeof data.endsAt === "string" ? Date.parse(data.endsAt) : Infinity;
      const branches = Array.isArray(data.branches) ? data.branches : [];
      return data.active !== false && (!branches.length || branches.includes(tenant)) && starts <= now && now <= ends;
    });
    return Response.json({ posters }, { headers: { "Cache-Control": "public, max-age=60, s-maxage=60" } });
  } catch {
    return Response.json({ posters: [] });
  }
}

