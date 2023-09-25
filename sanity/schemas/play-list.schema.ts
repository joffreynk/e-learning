export const playList = {
  name: "playlist",
  title: "Play List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [{ type: "reference", to: [{ type: "courses" }] }],
    },
  ],
};