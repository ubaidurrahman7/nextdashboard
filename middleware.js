import { authConfig } from "./app/authConfig";

import NextAuth from "next-auth";

console.log("authConfig in middleware.js:", authConfig);

export default NextAuth(authConfig).auth;
export const config = {
  matcher: ["/((?!api|_next/static|_next/image?.png).*)"],
};
