import js from "@eslint/js";
import globals from "globals";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.node },
    },
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    {
        files: ["**/*.md"],
        plugins: { markdown },
        language: "markdown/commonmark",
        extends: ["markdown/recommended"],
    },
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        extends: ["css/recommended"],
    },
    globalIgnores(["**/generated/"]),
]);
