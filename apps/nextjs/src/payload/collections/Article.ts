import { CollectionConfig } from "payload/types";

const Article: CollectionConfig = {
  slug: "article",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Article name",
      type: "text",
      required: true,
    },
    {
      name: "articleCategory",
      label: "Category",
      type: "relationship",
      required: true,
      relationTo: "articleCategory",
    },
    {
      name: "catalogue",
      label: "Catalogue",
      relationTo: "catalogue",
      type: "relationship",
      required: true,
      // filter only those catalogues that start and end date is still valid
    },

    {
      name: "image",
      label: "Article picture",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Article;
