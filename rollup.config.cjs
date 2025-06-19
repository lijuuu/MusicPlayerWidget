const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;
const peerDepsExternal = require("rollup-plugin-peer-deps-external");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
        entryFileNames: "[name].js",
        preserveModules: false
      },
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        entryFileNames: "[name].esm.js",
        preserveModules: false
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: [
      "react",
      "react-dom",
      "framer-motion",
      "@ionic/react",
      "lottie-web",
      /@ionic\/core/,
      /ionicons\/icons/
    ]
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].d.ts"
      }
    ],
    plugins: [dts()],
    external: [
      "react",
      "react-dom",
      "framer-motion",
      "@ionic/react",
      "lottie-web",
      /@ionic\/core/,
      /ionicons\/icons/
    ]
  },
];
