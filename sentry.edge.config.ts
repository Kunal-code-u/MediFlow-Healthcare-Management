// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://42f0052dd9f9f71a32c807915ee0c8c0@o4509105802051585.ingest.de.sentry.io/4509105805394000",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
