import { CollectionConfig } from "payload/types";

const ArticleCategory: CollectionConfig = {
  slug: "articleCategory",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Article category name",
      type: "text",
      required: true,
    },
  ],
};

export default ArticleCategory;
