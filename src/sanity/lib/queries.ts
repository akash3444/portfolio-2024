import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == 'project'] {
  name,
  description,
  image,
  techStack[]-> {
    name, "slug": slug.current
  },
  url
}`);
