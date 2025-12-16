import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const url = request.nextUrl.clone();

    // Check if we're on the dashboard subdomain
    // Development: dashboard.localhost:3000
    // Production: dashboard.belvederepharmacy.net, dashboard.kidbrookpharmacy.net, dashboard.Lowfieldpharmacy.net
    const isDashboardSubdomain =
        hostname.startsWith('dashboard.localhost') ||
        hostname.startsWith('dashboard.belvederepharmacy.net') ||
        hostname.startsWith('dashboard.kidbrookpharmacy.net') ||
        hostname.startsWith('dashboard.lowfieldpharmacy.net');

    // If on dashboard subdomain, rewrite to /dashboard routes
    if (isDashboardSubdomain) {
        // Avoid infinite loops by checking if already on dashboard path
        if (!url.pathname.startsWith('/dashboard')) {
            url.pathname = `/dashboard${url.pathname}`;
            return NextResponse.rewrite(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder assets
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)',
    ],
};
