const feedRoles = new Set(["feed"]);

export const isFeedRole = (role?: string) =>
  typeof role === "string" && feedRoles.has(role);
