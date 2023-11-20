import { CollectionConfig } from "payload/types";

const PDF: CollectionConfig = {
  slug: "pdf",
  admin: {
    useAsTitle: "name",
  },
  upload: {
    staticURL: "/pdf",
    staticDir: "pdf",
    mimeTypes: ["application/pdf"],
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

export default PDF;
