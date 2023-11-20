import path from "path";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Article from "./collections/Article";
import ArticleCategory from "./collections/ArticleCategory";
import Catalogue from "./collections/Catalogue";
import Media from "./collections/Media";
import PDF from "./collections/PDF";
import Shop from "./collections/Shop";
import Users from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    // Your collections here
    Users,
    Shop,
    Catalogue,
    PDF,
    Article,
    ArticleCategory,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
