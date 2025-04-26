// app/ssr.tsx
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

import { createRouter } from "./router";
import { getRouterManifest } from "@tanstack/react-start/router-manifest";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
