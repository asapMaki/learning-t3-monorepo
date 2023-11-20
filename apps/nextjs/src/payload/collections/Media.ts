import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "name",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
  ],
};

export default Media;
