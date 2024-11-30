type Links = {
  name: string;
  url: string | null;
};

export const LINKS: Links[] = [
  { name: "home", url: "page/" },
  { name: "about", url: "page/about" },
  { name: "experiences", url: "page/experiences" },
  { name: "education", url: "page/education" },
  { name: "skills", url: "page/skills" },
];

export const getActiveLink = (path: string | null) => {
  if (!path) {
    return 0;
  }

  return LINKS.findIndex((link) => link.url === `page/${path}`);
};
