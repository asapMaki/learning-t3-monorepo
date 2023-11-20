// Importing env files here to validate on build
import "./src/env.mjs";

import path from "path";
import { URL } from "url";
import { withPayload } from "@payloadcms/next-payload";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/api", "@acme/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

const __dirname = new URL(".", import.meta.url).pathname;

export default withPayload(config, {
  // The second argument to `withPayload`
  // allows you to specify paths to your Payload dependencies
  // and configure the admin route to your Payload CMS.

  // Point to your Payload config (Required)
  configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),

  // Point to custom Payload CSS (optional)
  // cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),

  // Point to your exported, initialized Payload instance (optional, default shown below`)
  payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts"),

  // Set a custom Payload admin route (optional, default is `/admin`)
  // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
  adminRoute: "/admin",
});

// next.config.js
// const path = require("path");
// const { withPayload } = require("@payloadcms/next-payload");

// module.exports = withPayload(
//   {
//     // your Next config here
//   },
//   {
//     // The second argument to `withPayload`
//     // allows you to specify paths to your Payload dependencies
//     // and configure the admin route to your Payload CMS.

//     // Point to your Payload config (Required)
//     configPath: path.resolve(__dirname, "./payload/payload.config.ts"),

//     // Point to custom Payload CSS (optional)
//     cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),

//     // Point to your exported, initialized Payload instance (optional, default shown below`)
//     payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),

//     // Set a custom Payload admin route (optional, default is `/admin`)
//     // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
//     adminRoute: "/admin",
//   }
// );
