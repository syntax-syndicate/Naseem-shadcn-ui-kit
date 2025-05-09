import { lib } from "./registry-lib";
import { components } from "./registry-components";
import { Registry } from "./schema";
import { examples } from "./registry-examples";
import { blocks } from "./registry-blocks";

// Ensure that the registry always have an array of registry items
const ensureArray = <T>(items: T | T[]): T[] =>
  Array.isArray(items) ? items : Object.values(items as object);

// Combine all registry items into a single array
export const registry: Registry = [
  // ...ensureArray(buttons),
  // ...ensureArray(input),
  ...ensureArray(lib),
  // ...ensureArray(ui),
  ...ensureArray(components),
  ...ensureArray(examples),
  ...ensureArray(blocks),
];

// Utility functions
export const getComponentByName = (name: string) =>
  registry.find((item) => item.name === name);

export const getDemoComponentByName = (name: string) =>
  registry.find(
    (item) => item.name === name && item.type === "registry:example"
  );

export const getComponentsByCategory = (category: string) => {
  return ensureArray(registry)
    .filter((item) => item.categories?.includes(category))
    .map((item) => item.name);
};
