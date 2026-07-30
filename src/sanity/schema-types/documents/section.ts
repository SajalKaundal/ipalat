import { defineField, defineType } from "sanity";

export const section = defineType({
  name: "section",
  title:"Sections",
  type: "document",
  fields: [
    defineField({ name: "id", title: "Id", type: "string" }),
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "heroSection" }],
      validation: (Rule) => Rule.max(1),
    }),
  ],
});
