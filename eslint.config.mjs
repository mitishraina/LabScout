import { dirname } from "path";
import { fileURLToPath } from "url";
import { eslint } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default eslint.config({
  extends: ["next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": "off",
    "jsx-a11y/alt-text": "off",
  },
});
