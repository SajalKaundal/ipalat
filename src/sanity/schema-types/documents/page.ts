import { defineArrayMember, defineField, defineType } from "sanity";
import { section } from "./section";

export const page = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "label" },
    }),
    defineField({
      name:"sections",
      title:"Sections",
      type:"array",
      of:[defineArrayMember({name:"section",type:"reference",to:[{type:"section"}]})]
    })
  ],
});
