// middleware.ts
export { default } from "next-auth/middleware"
export const config = { matcher: ["/dashboard/:path*", "/property-listing/:path*"] }