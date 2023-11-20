import { CollectionConfig } from "payload/types";

const Shop: CollectionConfig = {
  slug: "shop",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Shop name",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};

export default Shop;
