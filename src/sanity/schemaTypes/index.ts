import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { technology } from "./technology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, technology],
};
