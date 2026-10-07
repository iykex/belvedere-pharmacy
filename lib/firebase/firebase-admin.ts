import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

const FALLBACK_CLIENT_EMAIL = "firebase-adminsdk-fbsvc@meckay-pharmacy.iam.gserviceaccount.com";
const FALLBACK_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqkeAxjwaInqsT\nrN3S5bVLxYAF2bp+bVqfuXXJMAoy9+DrKnsqLFIB/lwEplxmo1/WPcHYUFuwcVnG\naGcwXq7GvsyQUtZvv7Ks9E6746p5YtBek+INl2PGUpiRJhvRZkgcZl6WSwSusoEo\n7HsnsMGqhzcreqIwVtbG7sP7IjeyPqMxkg6fdLGM0BEsADDtyhbO/gcCyHrd/gUY\nUgPOfN+7kvCNZuEDPnSq2McIG8uVvDtCgXqS8Lcn0hfJ58T4v31CjUQLymfVTUJQ\nhaP/YM+ViYlzF/M6XUZNPPt8DF7lFIhxHtBnV4YW+Tj6ItkeFuhjTDhmoYebsLX/\nWgbkmFKxAgMBAAECggEAAVh47WPxuWrqFTHv5DValenXlscM0BZW0c9Dzv6Ihoj6\nIb36iCc83VLoIKzo/QODJdnFtyb6lm3g1+OwPADBfWnKwwtqXpNVrf5W0Hk1tzO5\n1wglh7n6M7D2MgpQt4gcg4CHM3U1ZlYKf+J98Mb41QNQ/FkbhliW/firE04x2SuJ\nsjLX0022xuHadDtfMmdVhEGkGchs9/2hxmiCyEuXR1K9SVM1XVHNPAU4f4/YNTaF\nqMhlHxOf68ptXe2a5XsCyP1T3vDLxvrZgC56JNSxE0y6j2HBQq+TrXP2fp7jj03y\nOch+ZNSHQr+LnhXYBxySkfbzhnAsS0/R60lzUx8u2wKBgQDb1NYHWJgXWy79pfar\ngC/W1mzmlJAnad260NvX04087gBmcvCepUGWEZK+gjhoIDhp4yJ8+E3Gg/GkaNWJ\nn0wkUZwl8exq0613Oznxz9Nrn9xIGXID0ewE6lMQrrtNC2UFSLu8ILxFJcF/wOQk\n6GQ6euWRi4DIEOzPSCD6XjvGJwKBgQDGoiw3urkbAgUnhUTeRiPOePoKCmT24bCl\nj9w5l01/y9wN9lomeV87plW5Lrs8GYaIGUyU2CCgw1YCw6KwvIhHhyuiaFqdpQaP\n6AxsC+em9xbdkzixVstgzyC4i84eYYtgFlOaV10dgPAQun/gmMMGygVW5kSTWYX3\nIQ0zmfg/ZwKBgEkwC+24LjKgdf2WkpA4hjTVgL4nufKVSW/X90lcskoVxuZU4A1B\nYZuP0DZC7nqkN4PxTdsjY+lypjGhgW5nLZdt4Dm12IscXEU0367FDVNojpMmfZIO\nArEEPpFwSwV0hLaEp5QTpfqzfj+FPa+X+z6JCgMx2bdCA0Vjcy9HzkjDAoGAM4r1\nimiLi/SUPdMZMcxlkjhWObDEzkN2QR/5d4BJffX6Xi0k64LnMWVSLUFxGIFPJZXb\nB2yl2tGVShZV6yKhAl6S9gu6J9ogv8rpHkhgjjTj3A9N0MbC85YL2Zd9nuiU8BQb\nEZvF79f7c3vRnwhE40gc5pXOCaZbWutar58uidUCgYAdexIMzgJ5+VijbDePpV7x\n7qNVsknYIViwFWnT0BZypRHFZS7mo+7X1mh9Gbuv85PWoIadIiVgVJS/lhcb/auh\nWWlZeVPDsvK9+ArMJnqKmwNYEgK/3em2SwC+oDflrB+9depufUUKxVm+2quwJleK\nLyCdffU0il+dyaPmKOnKdg==\n-----END PRIVATE KEY-----\n";

export function getAdminDb(): Firestore | null {
  try {
    if (getApps().length > 0) {
      return getFirestore(getApps()[0]);
    }

    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "meckay-pharmacy";
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || FALLBACK_CLIENT_EMAIL;
    const rawKey = process.env.FIREBASE_PRIVATE_KEY || FALLBACK_PRIVATE_KEY;

    if (!clientEmail || !rawKey || rawKey.length < 50) {
      console.warn("[FirebaseAdmin] No valid credentials found");
      return null;
    }

    const privateKey = rawKey.replace(/\\n/g, "\n");

    const app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });

    return getFirestore(app);
  } catch (err) {
    console.warn("[FirebaseAdmin] Failed to initialize admin app:", err);
    return null;
  }
}
