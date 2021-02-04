Sentry.init({
  dsn: "https://4aa70d5c35d0429fa1b31c1112c118ea@o262702.ingest.sentry.io/5622146",
  release: "0.1.0",
  environment: "production"
})

// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
import("./index.js")
  .catch(e => console.error("Error importing `index.js`:", e));
