import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required().assetRequired(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technology" }] }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
