import path from "path";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    // Your collections here
    Users,
  ],
  globals: [
    // Your globals here
  ],
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
