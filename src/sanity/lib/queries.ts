import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == 'project'] {
  name,
  description,
  "image": image.asset->url,
  techStack[]-> {
    name, "slug": slug.current
  },
  url
}`);
