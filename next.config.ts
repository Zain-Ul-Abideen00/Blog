import type { NextConfig } from "next";
import { build } from "velite";
import type { Compiler } from "webpack"; // Import the Compiler type from Webpack

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
  reactStrictMode: true,
};

class VeliteWebpackPlugin {
  static started = false;

  apply(compiler: Compiler) {
    // Explicitly type the compiler parameter
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;
