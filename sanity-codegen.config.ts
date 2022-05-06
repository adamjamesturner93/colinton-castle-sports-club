import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity/schemas/schema",
  outputPath: "./src/types.ts",
};

export default config;
