import { CollectionConfig } from "payload/types";

const Catalogue: CollectionConfig = {
  slug: "catalogue",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "shop",
      label: "Shop",
      relationTo: "shop",
      type: "relationship",
      required: true,
    },
    {
      name: "name",
      label: "Catalogue name",
      type: "text",
      required: true,
    },
    {
      name: "catalogueUrl",
      label: "Catalogue original url",
      type: "text",
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      label: "End Date",
      type: "date",
    },
    {
      name: "pdf",
      label: "PDF",
      type: "upload",
      relationTo: "pdf",
    },
  ],
};

export default Catalogue;
