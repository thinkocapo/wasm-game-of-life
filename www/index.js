// For dev work
import * as wasm from "wasm-game-of-life"; // it's called wasm_game_of_life in the /pkg, but npm module is hello-wasm-pack
// import * as Sentry from "@sentry/browser";

// For testing the npm module
// import * as wasm from "hello-wasm-pack"; // is the npm package generated by `npm init wasm-app www`
// This alert() from gree() is blocking, OK it for rest of code here to execute
// wasm.greet("will cap");

console.log("hi")
Sentry.captureMessage("hi from wasm-game-of-life app")

function captureError() {
    try {
      throw new Error();
    } catch (e) {
      console.log("CATCHING ERROR", e)
      Sentry.captureException(e);
    }
}
  
async function loadWasm(url) {
    const importObj = {
      env: {
        capture_error: captureError
      },
    };
    return await WebAssembly.instantiateStreaming(fetch(url), importObj);
}

/**
 * This errors on:
 * localhost/:1 Uncaught (in promise) TypeError: WebAssembly.instantiate(): Import #0 module="./wasm_game_of_life_bg.js" error: module is not an object or function
 */
// loadWasm("../pkg/wasm_game_of_life_bg.wasm")
loadWasm("wasm_game_of_life_bg.wasm")
    .then(callback => {
        console.log("callback", callback)
    })
