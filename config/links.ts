type Links = {
  name: string;
  url: string | null;
};

export const LINKS: Links[] = [
  { name: "home", url: "" },
  { name: "about", url: "about" },
  { name: "experiences", url: "experiences" },
  { name: "education", url: "education" },
  { name: "skills", url: "skills" },
];

export const getActiveLink = (path: string | null) => {
  if (!path) {
    return 0;
  }

  return LINKS.findIndex((link) => link.url === path);
};
