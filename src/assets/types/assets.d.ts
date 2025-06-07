// src/types/assets.d.ts (or anywhere in src/)
declare module "*.svg" {
  const content: string;
  export default content;
}
