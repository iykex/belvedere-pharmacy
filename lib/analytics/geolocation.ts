export async function getGeolocation() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return null;
    const data = await res.json();

    return {
      country: data.country_name,
      countryCode: data.country,
      city: data.city,
      region: data.region,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  } catch {
    return null;
  }
}
