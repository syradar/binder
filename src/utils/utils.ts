export const capitalize = (s: string) =>
  s[0].toUpperCase() + s.slice(1).toLowerCase();

export const isDevelopment = () => process.env.NODE_ENV === "development";
